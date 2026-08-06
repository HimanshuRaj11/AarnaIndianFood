"use client";

import { useState, useEffect } from "react";
import { submitInvoice, submitKOT } from "../actions";
import { RotateCcw } from "lucide-react";

import { usePOSStore } from "@/lib/store";

// Subcomponents
import TopHeader from "./TopHeader";
import LeftOptionsPanel from "./LeftOptionsPanel";
import MiddleCatalogPanel from "./MiddleCatalogPanel";
import RightSummaryPanel from "./RightSummaryPanel";
import EditProductDetailsModal from "./EditProductDetailsModal";
import HeldOrdersSelectionModal from "./HeldOrdersSelectionModal";

interface ProductItem {
  id: string;
  name: string;
  code: string;
  price: number;
  category: string;
  isAvailable: boolean;
  branchName?: string;
}

interface BranchItem {
  id: string;
  name: string;
}

interface POSWorkspaceProps {
  products: ProductItem[];
  categories: string[];
  branches: BranchItem[];
  initialBranchId: string;
  branchName: string;
  cashierName: string;
  role: "ADMIN" | "MANAGER" | "STAFF" | "OWNER";
  recentInvoices: Array<{ id: string; invoiceNo: string; total: number; createdAt: string }>;
  activeKots: Array<{ id: string; kotNo: string; tableNo: string; status: "PENDING" | "PREPARING" | "SERVED" | "CANCELLED"; createdAt: string }>;
  initialCompany: { id: string; name: string; currencyCode: string; currencySymbol: string };
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  isComplement: boolean;
  specification?: string;
}

interface HeldOrder {
  id: string;
  cart: CartItem[];
  clientName: string;
  clientPhone: string;
  branchId: string;
  tableNo: string;
  discountType: "PERCENT" | "FLAT" | "NONE" | "EXEMPTED";
  discountValue: number;
  paymentMode: "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE";
  createdAt: string;
}

interface PrintedInvoice {
  invoiceNo: string;
  items: any[];
  subtotal: number;
  discount: number;
  taxAmount: number;
  total: number;
  paymentMode: string;
  createdAt: string;
  branchName: string;
  branchAddress: string;
  branchPhone: string;
  cashier: string;
  tableNo?: string;
}

export default function POSWorkspace({ 
  products, 
  categories, 
  branches, 
  initialBranchId,
  branchName, 
  cashierName,
  role,
  recentInvoices,
  activeKots,
  initialCompany
}: POSWorkspaceProps) {
  const company = usePOSStore((state) => state.company);
  const currencySymbol = company?.currencySymbol || "$";

  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [tableNo, setTableNo] = useState("");
  const [kotNotes, setKotNotes] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [generateKOT, setGenerateKOT] = useState(true);
  
  // Custom discount models
  const [discountType, setDiscountType] = useState<"PERCENT" | "FLAT" | "NONE" | "EXEMPTED">("NONE");
  const [discountValue, setDiscountValue] = useState<number>(0);
  
  const [branchId, setBranchId] = useState(initialBranchId);
  const [paymentMode, setPaymentMode] = useState<"CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE">("CASH");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  
  // Held orders list
  const [heldOrders, setHeldOrders] = useState<HeldOrder[]>([]);
  const [showHeldModal, setShowHeldModal] = useState(false);

  // Bill type (BILL or KOT) and bottom tab selection
  const [billType, setBillType] = useState<"BILL" | "KOT">("BILL");
  const [bottomTab, setBottomTab] = useState<"HELD" | "ACTIVE_KOTS" | "RECENT_INVOICES">("HELD");

  const [localRecentInvoices, setLocalRecentInvoices] = useState(recentInvoices);
  const [localActiveKots, setLocalActiveKots] = useState(activeKots);
  
  // Collapsible bottom drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Zustand store initialization
  const setPOSData = usePOSStore((state) => state.setPOSData);

  useEffect(() => {
    setPOSData({
      company: initialCompany,
      branch: { id: branchId, name: branchName },
      user: { name: cashierName, role, branchId: initialBranchId }
    });
  }, [initialCompany, branchId, branchName, cashierName, role, initialBranchId, setPOSData]);

  // Edit item states
  const [editingCartItem, setEditingCartItem] = useState<CartItem | null>(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editQuantity, setEditQuantity] = useState(1);
  const [editIsComplement, setEditIsComplement] = useState(false);
  const [editSpecification, setEditSpecification] = useState("");

  const openEditModal = (item: CartItem) => {
    setEditingCartItem(item);
    setEditName(item.name);
    setEditPrice(item.price);
    setEditQuantity(item.quantity);
    setEditIsComplement(item.isComplement);
    setEditSpecification(item.specification || "");
  };

  const openCustomComplement = () => {
    const draftItem: CartItem = {
      productId: "CUSTOM_COMPLEMENT_" + Date.now(),
      name: "Custom Complement",
      price: 0,
      quantity: 1,
      isComplement: true,
      specification: ""
    };
    openEditModal(draftItem);
  };

  const saveEditedItem = () => {
    if (!editingCartItem) return;
    
    setCart((prev) => {
      const exists = prev.some((item) => item.productId === editingCartItem.productId);
      if (exists) {
        return prev.map((item) => {
          if (item.productId === editingCartItem.productId) {
            return {
              ...item,
              name: editName,
              price: editIsComplement ? 0 : editPrice,
              quantity: editQuantity,
              isComplement: editIsComplement,
              specification: editSpecification
            };
          }
          return item;
        });
      } else {
        return [
          ...prev,
          {
            productId: editingCartItem.productId,
            name: editName,
            price: editIsComplement ? 0 : editPrice,
            quantity: editQuantity,
            isComplement: editIsComplement,
            specification: editSpecification
          }
        ];
      }
    });
    setEditingCartItem(null);
  };

  // Keyboard navigation focus index for menu list selection
  const [focusedProductIndex, setFocusedProductIndex] = useState<number>(-1);

  // Load held orders on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aarna_pos_held_orders");
      if (stored) {
        setHeldOrders(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error loading held orders:", e);
    }
  }, []);

  // Filter products based on search queries and category selections
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Reset focus index when catalog state changes
  useEffect(() => {
    setFocusedProductIndex(-1);
  }, [searchQuery, selectedCategory]);

  // Global keydown listener to focus search bar on alphanumeric keys, and handle arrow key + Enter navigation!
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInputFocused = activeEl && (
        activeEl.tagName === "INPUT" || 
        activeEl.tagName === "TEXTAREA" || 
        activeEl.tagName === "SELECT"
      );

      const isSearchFocused = activeEl && activeEl.id === "pos-product-search";

      if (isInputFocused && !isSearchFocused) {
        return;
      }

      // Handle Arrow Up, Arrow Down, and Enter for product selection
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setFocusedProductIndex((prev) => {
          if (filteredProducts.length === 0) return -1;
          const next = prev + 1;
          return next >= filteredProducts.length ? 0 : next;
        });
        return;
      }

      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setFocusedProductIndex((prev) => {
          if (filteredProducts.length === 0) return -1;
          const next = prev - 1;
          return next < 0 ? filteredProducts.length - 1 : next;
        });
        return;
      }

      if (e.key === "Enter") {
        if (focusedProductIndex >= 0 && focusedProductIndex < filteredProducts.length) {
          e.preventDefault();
          const prod = filteredProducts[focusedProductIndex];
          if (prod.isAvailable) {
            addToCart(prod, false);
          }
        }
        return;
      }

      // Autofocus alphanumeric keys to search bar
      if (!isInputFocused) {
        const isAlphanumeric = /^[a-zA-Z0-9]$/.test(e.key);
        if (isAlphanumeric && !e.ctrlKey && !e.metaKey && !e.altKey) {
          const searchInput = document.getElementById("pos-product-search") as HTMLInputElement;
          if (searchInput) {
            e.preventDefault();
            setSearchQuery((prev) => prev + e.key);
            searchInput.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [filteredProducts, focusedProductIndex]);

  const addToCart = (product: ProductItem, isComplement = false) => {
    if (!product.isAvailable) return;
    
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id && item.isComplement === isComplement);
      if (existing) {
        return prev.map((item) => 
          item.productId === product.id && item.isComplement === isComplement
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        productId: product.id,
        name: product.name,
        price: isComplement ? 0 : product.price,
        quantity: 1,
        isComplement
      }];
    });
    
    setMessage(null);
  };

  const updateQuantity = (productId: string, isComplement: boolean, delta: number) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.productId === productId && item.isComplement === isComplement) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter((item): item is CartItem => item !== null)
    );
  };

  const toggleComplement = (productId: string, isComplement: boolean) => {
    setCart((prev) => {
      const match = prev.find((item) => item.productId === productId && item.isComplement === isComplement);
      if (!match) return prev;

      // Find original base product price
      const originalProduct = products.find((p) => p.id === productId);
      const originalPrice = originalProduct ? originalProduct.price : 0;

      // Remove the old item reference, and update or merge it to the toggled state
      const filtered = prev.filter((item) => !(item.productId === productId && item.isComplement === isComplement));
      const targetComplementState = !isComplement;

      const existingToggled = filtered.find((item) => item.productId === productId && item.isComplement === targetComplementState);
      if (existingToggled) {
        return filtered.map((item) => 
          item.productId === productId && item.isComplement === targetComplementState
            ? { ...item, quantity: item.quantity + match.quantity }
            : item
        );
      }

      return [...filtered, {
        ...match,
        price: targetComplementState ? 0 : originalPrice,
        isComplement: targetComplementState
      }];
    });
  };

  const removeFromCart = (productId: string, isComplement: boolean) => {
    setCart((prev) => prev.filter((item) => !(item.productId === productId && item.isComplement === isComplement)));
  };

  const clearCart = () => {
    setCart([]);
    setClientName("");
    setClientPhone("");
    setTableNo("");
    setKotNotes("");
    setDiscountType("NONE");
    setDiscountValue(0);
    setMessage(null);
  };

  // Hold current invoice actions
  const handleHoldInvoice = () => {
    if (cart.length === 0) {
      setMessage({ type: "error", text: "Please add products to put the invoice on hold." });
      return;
    }

    const newHold: HeldOrder = {
      id: `HOLD-${Date.now().toString().slice(-6)}`,
      cart,
      clientName,
      clientPhone,
      branchId,
      tableNo,
      discountType,
      discountValue,
      paymentMode,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [...heldOrders, newHold];
    setHeldOrders(updated);
    localStorage.setItem("aarna_pos_held_orders", JSON.stringify(updated));
    setMessage({ type: "success", text: `Order put on hold: ${newHold.id}` });
    clearCart();
  };

  const resumeHeldOrder = (order: HeldOrder) => {
    setCart(order.cart);
    setClientName(order.clientName);
    setClientPhone(order.clientPhone);
    setBranchId(order.branchId);
    setTableNo(order.tableNo);
    setDiscountType(order.discountType);
    setDiscountValue(order.discountValue);
    setPaymentMode(order.paymentMode);
    
    const updated = heldOrders.filter((o) => o.id !== order.id);
    setHeldOrders(updated);
    localStorage.setItem("aarna_pos_held_orders", JSON.stringify(updated));
    setShowHeldModal(false);
    setMessage({ type: "success", text: `Loaded held order: ${order.id}` });
  };

  const deleteHeldOrder = (id: string) => {
    const updated = heldOrders.filter((o) => o.id !== id);
    setHeldOrders(updated);
    localStorage.setItem("aarna_pos_held_orders", JSON.stringify(updated));
  };

  // Send KOT Action
  const handleKOT = async () => {
    if (cart.length === 0) {
      setMessage({ type: "error", text: "Please add products to the order first." });
      return;
    }
    if (!tableNo.trim()) {
      setMessage({ type: "error", text: "Table Number is required for kitchen orders." });
      return;
    }

    setLoading(true);
    setMessage(null);

    const cartInput = cart.map((item) => {
      let displayName = item.name;
      if (item.specification) {
        displayName = `${displayName} (${item.specification})`;
      }
      return {
        productId: item.productId,
        name: item.isComplement ? `*COMP* ${displayName}` : displayName,
        price: item.price,
        quantity: item.quantity
      };
    });

    const res = await submitKOT(tableNo, cartInput, kotNotes, branchId);

    if (res.success) {
      setMessage({ type: "success", text: `KOT placed successfully: ${res.kotNo}` });
      setKotNotes("");
    } else {
      setMessage({ type: "error", text: res.error || "Failed to submit KOT." });
    }
    setLoading(false);
  };

  // Place Invoice / KOT Action
  const handleCheckout = async () => {
    if (cart.length === 0) {
      setMessage({ type: "error", text: "Please add products to checkout." });
      return;
    }

    setLoading(true);
    setMessage(null);

    const cartInput = cart.map((item) => {
      let displayName = item.name;
      if (item.specification) {
        displayName = `${displayName} (${item.specification})`;
      }
      return {
        productId: item.productId,
        name: item.isComplement ? `*COMP* ${displayName}` : displayName,
        price: item.price,
        quantity: item.quantity
      };
    });

    if (billType === "KOT") {
      if (!tableNo.trim()) {
        setMessage({ type: "error", text: "Table Number is required for kitchen orders." });
        setLoading(false);
        return;
      }
      
      const res = await submitKOT(tableNo, cartInput, kotNotes, branchId);
      if (res.success) {
        setMessage({ type: "success", text: `KOT placed successfully: ${res.kotNo}` });
        setKotNotes("");
        // Add to active KOTs list
        setLocalActiveKots((prev) => [
          {
            id: (res.success && res.kot?.id) || `KOT-${res.kotNo || ""}`,
            kotNo: res.kotNo || "",
            tableNo: tableNo,
            status: "PENDING" as const,
            createdAt: new Date().toISOString()
          },
          ...prev
        ].slice(0, 5));
        clearCart();
      } else {
        setMessage({ type: "error", text: res.error || "Failed to submit KOT." });
      }
      setLoading(false);
      return;
    }

    // Bill Type is "BILL": full invoice checkout!
    if (generateKOT) {
      if (!tableNo.trim()) {
        setMessage({ type: "error", text: "Table Number is required when KOT is active." });
        setLoading(false);
        return;
      }
      
      const kotRes = await submitKOT(tableNo, cartInput, kotNotes, branchId);
      if (!kotRes.success) {
        setMessage({ type: "error", text: kotRes.error || "Failed to submit KOT. Checkout aborted." });
        setLoading(false);
        return;
      }
      // Add to KOT list
      setLocalActiveKots((prev) => [
        {
          id: (kotRes.success && kotRes.kot?.id) || `KOT-${kotRes.kotNo || ""}`,
          kotNo: kotRes.kotNo || "",
          tableNo: tableNo,
          status: "PENDING" as const,
          createdAt: new Date().toISOString()
        },
        ...prev
      ].slice(0, 5));
    }

    // Compute discount amount for submit
    const subtotalVal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountAmount = 0;
    if (discountType === "PERCENT") {
      discountAmount = subtotalVal * (discountValue / 100);
    } else if (discountType === "FLAT") {
      discountAmount = discountValue;
    } else if (discountType === "EXEMPTED") {
      discountAmount = subtotalVal;
    }

    const res = await submitInvoice(
      cartInput, 
      paymentMode, 
      discountAmount, 
      tableNo, 
      clientName, 
      clientPhone,
      branchId
    );

    if (res.success && res.invoice) {
      const printData: PrintedInvoice = {
        ...res.invoice,
        tableNo: tableNo || undefined
      };

      setPrintedInvoice(printData);
      setMessage({ type: "success", text: `Invoice generated successfully: ${res.invoiceNo}` });
      
      // Add to recent invoices list
      setLocalRecentInvoices((prev) => [
        {
          id: res.invoice.id,
          invoiceNo: res.invoiceNo,
          total: res.invoice.total,
          createdAt: new Date().toISOString()
        },
        ...prev
      ].slice(0, 5));

      clearCart();

      setTimeout(() => {
        window.print();
      }, 300);
    } else {
      setMessage({ type: "error", text: res.error || "Failed to checkout invoice." });
    }
    setLoading(false);
  };

  // Print receipt state
  const [printedInvoice, setPrintedInvoice] = useState<PrintedInvoice | null>(null);

  return (
    <div className="flex flex-col space-y-4 p-4 max-w-[1600px] mx-auto h-screen overflow-hidden select-none relative">
      
      {/* Top Header Location & switch */}
      <TopHeader
        branchName={branchName}
        role={role}
        branchId={branchId}
        setBranchId={setBranchId}
        branches={branches}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0 pb-14">
        
        {/* PANEL 1: CUSTOMER & ORDER OPTIONS (3 cols) */}
        <LeftOptionsPanel
          clientName={clientName}
          setClientName={setClientName}
          clientPhone={clientPhone}
          setClientPhone={setClientPhone}
          tableNo={tableNo}
          setTableNo={setTableNo}
          kotNotes={kotNotes}
          setKotNotes={setKotNotes}
          generateKOT={generateKOT}
          setGenerateKOT={setGenerateKOT}
          discountType={discountType}
          setDiscountType={setDiscountType}
          discountValue={discountValue}
          setDiscountValue={setDiscountValue}
          heldOrdersCount={heldOrders.length}
          setShowHeldModal={setShowHeldModal}
          handleKOT={handleKOT}
          loading={loading}
          billType={billType}
          setBillType={setBillType}
        />

        {/* PANEL 2: PRODUCT MENU & SEARCH (5 cols) */}
        <MiddleCatalogPanel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredProducts={filteredProducts}
          addToCart={addToCart}
          focusedProductIndex={focusedProductIndex}
          role={role}
          openCustomComplement={openCustomComplement}
          billType={billType}
        />

        {/* PANEL 3: BILL CHECKOUT SUMMARY (4 cols) */}
        <RightSummaryPanel
          cart={cart}
          clearCart={clearCart}
          message={message}
          updateQuantity={updateQuantity}
          openEditModal={openEditModal}
          toggleComplement={toggleComplement}
          removeFromCart={removeFromCart}
          discountType={discountType}
          discountValue={discountValue}
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
          handleCheckout={handleCheckout}
          loading={loading}
          billType={billType}
        />

      </div>

      {/* Floating Bottom Drawer Registry */}
      <div className={`bg-zinc-900 border border-zinc-800 rounded-t-2xl shadow-2xl transition-all duration-300 absolute bottom-0 left-4 right-4 z-40 ${
        isDrawerOpen ? "h-64" : "h-11"
      } flex flex-col overflow-hidden`}>
        
        {/* Drawer Header (Clickable to toggle) */}
        <div 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="px-5 py-2.5 bg-zinc-950/60 border-b border-zinc-850 flex items-center justify-between cursor-pointer hover:bg-zinc-950 transition-colors shrink-0"
        >
          <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-450 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Activity Registry Board</span>
            {!isDrawerOpen && (
              <span className="text-[9px] text-zinc-550 lowercase font-medium tracking-normal">
                ({heldOrders.length} held • {localActiveKots.length} active KOTs • {localRecentInvoices.length} recent bills)
              </span>
            )}
          </div>
          
          <button 
            type="button"
            className="text-zinc-500 hover:text-amber-500 p-0.5 rounded transition-all"
          >
            {isDrawerOpen ? (
              <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                Close Board <span className="text-xs">▼</span>
              </span>
            ) : (
              <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                Open Board <span className="text-xs">▲</span>
              </span>
            )}
          </button>
        </div>

        {/* Drawer Body (Visible when open) */}
        {isDrawerOpen && (
          <div className="p-4 flex-1 flex flex-col space-y-4 overflow-hidden">
            {/* Tabs Row */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 shrink-0">
              <div className="flex gap-4">
                {[
                  { id: "HELD", label: `Held Invoices (${heldOrders.length})` },
                  { id: "ACTIVE_KOTS", label: `Active KOT Queue (${localActiveKots.length})` },
                  { id: "RECENT_INVOICES", label: `Recent Bills (${localRecentInvoices.length})` }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setBottomTab(tab.id as any)}
                    className={`text-[10px] font-black uppercase tracking-wider pb-2 border-b-2 transition-all cursor-pointer ${
                      bottomTab === tab.id
                        ? "border-amber-500 text-amber-500"
                        : "border-transparent text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 flex-1 overflow-y-auto pr-1 scrollbar-thin pb-2">
              {bottomTab === "HELD" && (
                heldOrders.length === 0 ? (
                  <div className="col-span-full py-4 text-center text-xs text-zinc-650 font-medium">No held orders available.</div>
                ) : (
                  heldOrders.map((order) => (
                    <div key={order.id} className="p-3 bg-zinc-950/40 border border-zinc-850 rounded-xl flex items-center justify-between gap-2">
                      <div className="text-[10px] space-y-0.5 min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[7px] font-black rounded uppercase">HOLD</span>
                          <span className="font-extrabold text-zinc-300 truncate">{order.id}</span>
                        </div>
                        <div className="text-zinc-450 font-bold truncate">{order.clientName || "Walk-in Customer"}</div>
                        <div className="text-[8px] text-zinc-550">Table {order.tableNo || "N/A"}</div>
                      </div>
                      <button
                        onClick={() => resumeHeldOrder(order)}
                        className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-black text-[9px] font-black uppercase rounded cursor-pointer transition-all shrink-0"
                      >
                        Resume
                      </button>
                    </div>
                  ))
                )
              )}

              {bottomTab === "ACTIVE_KOTS" && (
                localActiveKots.length === 0 ? (
                  <div className="col-span-full py-4 text-center text-xs text-zinc-650 font-medium">No active kitchen orders found.</div>
                ) : (
                  localActiveKots.map((kot) => (
                    <div key={kot.id} className="p-3 bg-zinc-950/40 border border-zinc-850 rounded-xl flex items-center justify-between gap-2">
                      <div className="text-[10px] space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[7px] font-black rounded uppercase">KOT</span>
                          <span className="font-extrabold text-zinc-300">#{kot.kotNo}</span>
                        </div>
                        <div className="text-[8px] text-zinc-550">Table {kot.tableNo || "N/A"}</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span className="text-[8.5px] uppercase font-bold text-amber-450">{kot.status}</span>
                        </div>
                      </div>
                      <span className="text-[8px] text-zinc-600 shrink-0">{new Date(kot.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  ))
                )
              )}

              {bottomTab === "RECENT_INVOICES" && (
                localRecentInvoices.length === 0 ? (
                  <div className="col-span-full py-4 text-center text-xs text-zinc-650 font-medium">No recent invoices logged.</div>
                ) : (
                  localRecentInvoices.map((inv) => (
                    <div key={inv.id} className="p-3 bg-zinc-950/40 border border-zinc-850 rounded-xl flex items-center justify-between gap-2">
                      <div className="text-[10px] space-y-0.5 min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[7px] font-black rounded uppercase">BILL</span>
                          <span className="font-extrabold text-white truncate">{inv.invoiceNo}</span>
                        </div>
                         <div className="text-[8.5px] text-emerald-450 font-black">{currencySymbol}{inv.total.toFixed(2)}</div>
                        <div className="text-[8px] text-zinc-605">{new Date(inv.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                      <span className="text-[8px] text-zinc-650 font-bold uppercase shrink-0">Success</span>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Held Orders Modal */}
      <HeldOrdersSelectionModal
        showHeldModal={showHeldModal}
        setShowHeldModal={setShowHeldModal}
        heldOrders={heldOrders}
        resumeHeldOrder={resumeHeldOrder}
        deleteHeldOrder={deleteHeldOrder}
      />

      {/* Edit Product Details Modal */}
      <EditProductDetailsModal
        editingCartItem={editingCartItem}
        setEditingCartItem={setEditingCartItem}
        editName={editName}
        setEditName={setEditName}
        editPrice={editPrice}
        setEditPrice={setEditPrice}
        editQuantity={editQuantity}
        setEditQuantity={setEditQuantity}
        editIsComplement={editIsComplement}
        setEditIsComplement={setEditIsComplement}
        editSpecification={editSpecification}
        setEditSpecification={setEditSpecification}
        saveEditedItem={saveEditedItem}
      />

      {/* Hidden Print Receipt Template */}
      {printedInvoice && (
        <div className="hidden print:block w-[80mm] text-[11px] font-mono leading-relaxed p-4 text-black bg-white">
          <div className="text-center font-bold text-sm tracking-wider uppercase">{printedInvoice.branchName}</div>
          <div className="text-center text-[10px] mt-0.5">{printedInvoice.branchAddress}</div>
          <div className="text-center text-[10px]">PH: {printedInvoice.branchPhone}</div>
          
          <div className="border-t border-b border-black border-dashed py-1.5 my-2 text-[10px]">
            <div className="flex justify-between">
              <span>INV NO: {printedInvoice.invoiceNo}</span>
              <span>DATE: {new Date(printedInvoice.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>CASHIER: {printedInvoice.cashier}</span>
              <span>TIME: {new Date(printedInvoice.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            {printedInvoice.tableNo && (
              <div>TABLE NO: {printedInvoice.tableNo}</div>
            )}
          </div>

          <table className="w-full text-left text-[10px] border-collapse">
            <thead>
              <tr className="border-b border-black border-dotted font-bold">
                <th className="py-1">ITEM</th>
                <th className="py-1 text-center">QTY</th>
                <th className="py-1 text-right">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {printedInvoice.items.map((item: any, idx: number) => (
                <tr key={idx} className="align-top">
                  <td className="py-1 truncate max-w-[40mm]">{item.name}</td>
                  <td className="py-1 text-center">{item.quantity}</td>
                  <td className="py-1 text-right">{currencySymbol}{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t border-black border-dotted pt-1.5 mt-2 space-y-0.5 text-[10px] font-bold">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span>{currencySymbol}{printedInvoice.subtotal}</span>
            </div>
            {printedInvoice.discount > 0 && (
              <div className="flex justify-between">
                <span>DISCOUNT</span>
                <span>-{currencySymbol}{printedInvoice.discount}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>VAT (14%)</span>
              <span>{currencySymbol}{printedInvoice.taxAmount}</span>
            </div>
            <div className="flex justify-between font-black text-xs pt-1 border-t border-dotted border-black">
              <span>GRAND TOTAL</span>
              <span>{currencySymbol}{printedInvoice.total}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-black pt-2 mt-2 text-center text-[10px] uppercase">
            <div>PAYMENT MODE: {printedInvoice.paymentMode}</div>
            <div className="font-bold mt-2 tracking-widest text-[9px]">*** THANK YOU ***</div>
          </div>
        </div>
      )}

    </div>
  );
}
