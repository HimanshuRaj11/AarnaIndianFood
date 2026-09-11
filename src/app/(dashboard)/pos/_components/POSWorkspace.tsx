"use client";

import { useState, useEffect } from "react";
import { submitInvoice, submitKOT, updateKOT, holdBill, deleteHeldInvoice } from "../actions";
import { RotateCcw, Sparkles, ChefHat, PauseCircle, CheckCircle, FileText, ArrowUpRight, Printer } from "lucide-react";

import { usePOSStore } from "@/lib/store";
import { printInvoice, printKOT, connectPrinter } from "@/lib/printer/escpos";

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
  printerName?: string;
  street?: string;
  city?: string;
  phone?: string;
  printers?: Array<{
    id: string;
    name: string;
    printerName: string;
    type: string;
    isDefault: boolean;
    branchId?: string;
  }>;
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  isComplement: boolean;
  specification?: string;
}

export interface HeldOrder {
  id: string;
  dbId?: string;
  cart: CartItem[];
  clientName: string;
  clientPhone: string;
  branchId: string;
  tableNo: string;
  kotNotes?: string;
  discountType: "PERCENT" | "FLAT" | "NONE" | "EXEMPTED";
  discountValue: number;
  paymentMode: "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE";
  createdAt: string;
}

interface RecentInvoiceItem {
  id: string;
  invoiceNo: string;
  subtotal?: number;
  discount?: number;
  taxAmount?: number;
  total: number;
  paymentMode?: string;
  clientName?: string;
  clientPhone?: string;
  tableNo?: string;
  items?: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }>;
  createdAt: string;
}

interface ActiveKotItem {
  id: string;
  kotNo: string;
  tableNo: string;
  status: "PENDING" | "PREPARING" | "SERVED" | "CANCELLED";
  items: Array<{
    id: string;
    productId?: string | null;
    name: string;
    quantity: number;
    notes?: string | null;
  }>;
  createdAt: string;
}

interface POSWorkspaceProps {
  products: ProductItem[];
  categories: string[];
  branches: BranchItem[];
  initialBranchId: string;
  branchName: string;
  cashierName: string;
  role: "ADMIN" | "MANAGER" | "STAFF" | "OWNER";
  recentInvoices: RecentInvoiceItem[];
  activeKots: ActiveKotItem[];
  initialHeldInvoices?: HeldOrder[];
  initialCompany: {
    id: string;
    name: string;
    currencyCode: string;
    currencySymbol: string;
    street?: string;
    city?: string;
    phone?: string;
    VATNumber?: string;
    branches?: BranchItem[];
  };
  userReceiptPrinter?: string;
  userKotPrinter?: string;
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
  branchId?: string;
  clientName?: string;
  clientPhone?: string;
  selectedPrinter?: string;
}

interface PrintedKOT {
  kotNo: string;
  tableNo: string;
  items: Array<{
    name: string;
    quantity: number;
    notes?: string;
  }>;
  notes?: string;
  createdAt: string;
  branchName: string;
  cashier: string;
  isUpdate?: boolean;
  branchId?: string;
  selectedPrinter?: string;
}

interface EditingSession {
  type: "HELD" | "KOT" | "INVOICE";
  id: string;
  dbId?: string;
  kotNo?: string;
  tableNo?: string;
  invoiceNo?: string;
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
  initialHeldInvoices = [],
  initialCompany,
  userReceiptPrinter = "",
  userKotPrinter = ""
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
  
  // Custom discount models
  const [discountType, setDiscountType] = useState<"PERCENT" | "FLAT" | "NONE" | "EXEMPTED">("NONE");
  const [discountValue, setDiscountValue] = useState<number>(0);
  
  const [branchId, setBranchId] = useState(initialBranchId);
  const [paymentMode, setPaymentMode] = useState<"CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE">("CASH");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  
  // Held orders list: initialized with DB held invoices
  const [heldOrders, setHeldOrders] = useState<HeldOrder[]>(initialHeldInvoices);
  const [showHeldModal, setShowHeldModal] = useState(false);

  // Active editing session: tracks if we are modifying an existing Held Order, KOT, or Bill
  const [editingSession, setEditingSession] = useState<EditingSession | null>(null);

  // Bill type (BILL or KOT) and bottom tab selection
  const [billType, setBillType] = useState<"BILL" | "KOT">("BILL");
  const [bottomTab, setBottomTab] = useState<"HELD" | "ACTIVE_KOTS" | "RECENT_INVOICES">("HELD");

  const [localRecentInvoices, setLocalRecentInvoices] = useState(recentInvoices);
  const [localActiveKots, setLocalActiveKots] = useState(activeKots);
  
  // Collapsible bottom drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Print receipt & KOT state
  const [printMode, setPrintMode] = useState<"INVOICE" | "KOT">("INVOICE");
  const [printedInvoice, setPrintedInvoice] = useState<PrintedInvoice | null>(null);
  const [printedKOT, setPrintedKOT] = useState<PrintedKOT | null>(null);

  // Active station printer overrides (defaults to user preferences or localStorage)
  const [activeReceiptPrinter, setActiveReceiptPrinter] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aarna_user_receipt_printer");
      if (saved) return saved;
    }
    return userReceiptPrinter || "";
  });

  const [activeKotPrinter, setActiveKotPrinter] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aarna_user_kot_printer");
      if (saved) return saved;
    }
    return userKotPrinter || "";
  });

  const handleActiveReceiptPrinterChange = (val: string) => {
    setActiveReceiptPrinter(val);
    try {
      if (val) localStorage.setItem("aarna_user_receipt_printer", val);
      else localStorage.removeItem("aarna_user_receipt_printer");
    } catch (e) {}
  };

  const handleActiveKotPrinterChange = (val: string) => {
    setActiveKotPrinter(val);
    try {
      if (val) localStorage.setItem("aarna_user_kot_printer", val);
      else localStorage.removeItem("aarna_user_kot_printer");
    } catch (e) {}
  };

  // Printer connection state
  const [printerStatus, setPrinterStatus] = useState<"connected" | "disconnected" | "checking">("checking");

  const checkPrinterConnection = async () => {
    setPrinterStatus("checking");
    const connected = await connectPrinter();
    setPrinterStatus(connected ? "connected" : "disconnected");
  };

  useEffect(() => {
    checkPrinterConnection();
  }, []);

  const executePrintInvoice = async (invoiceData: any) => {
    const companyForPrint = {
      ...company,
      ...initialCompany,
      branches,
      userReceiptPrinter: activeReceiptPrinter,
    };

    const printPayload = {
      ...invoiceData,
      selectedPrinter: activeReceiptPrinter || invoiceData.selectedPrinter,
    };

    // Attempt direct thermal ESC/POS print via QZ Tray
    const res = await printInvoice(printPayload, companyForPrint);

    if (!res.success) {
      console.info("Direct thermal printer unreachable, using browser print fallback:", res.error);
      setPrintMode("INVOICE");
      setPrintedInvoice(invoiceData);
      setPrintedKOT(null);
      setTimeout(() => {
        window.print();
      }, 250);
    }
  };

  const executePrintKOT = async (kotData: any) => {
    const companyForPrint = {
      ...company,
      ...initialCompany,
      branches,
      userKotPrinter: activeKotPrinter,
    };

    const printPayload = {
      ...kotData,
      selectedPrinter: activeKotPrinter || kotData.selectedPrinter,
    };

    // Attempt direct thermal ESC/POS print via QZ Tray
    const res = await printKOT(printPayload, companyForPrint);

    if (!res.success) {
      console.info("Direct thermal printer unreachable, using browser print fallback:", res.error);
      setPrintMode("KOT");
      setPrintedKOT(kotData);
      setPrintedInvoice(null);
      setTimeout(() => {
        window.print();
      }, 250);
    }
  };

  const reprintInvoice = (inv: RecentInvoiceItem) => {
    const currentBranch = branches.find((b) => b.id === branchId);
    const printData: PrintedInvoice = {
      invoiceNo: inv.invoiceNo,
      items: inv.items || [],
      subtotal: inv.subtotal ?? (inv.items || []).reduce((s, it) => s + it.total, 0),
      discount: inv.discount ?? 0,
      taxAmount: inv.taxAmount ?? 0,
      total: inv.total,
      paymentMode: inv.paymentMode || "CASH",
      createdAt: inv.createdAt,
      branchName: currentBranch?.name || branchName,
      branchAddress: currentBranch ? `${currentBranch.street || ""}, ${currentBranch.city || ""}` : "",
      branchPhone: currentBranch?.phone || "",
      cashier: cashierName,
      tableNo: inv.tableNo || undefined,
      clientName: inv.clientName || undefined,
      clientPhone: inv.clientPhone || undefined,
      branchId
    };

    setMessage({ type: "success", text: `Sending invoice #${inv.invoiceNo} to printer...` });
    executePrintInvoice(printData);
  };

  const reprintKOT = (kot: ActiveKotItem) => {
    const currentBranch = branches.find((b) => b.id === branchId);
    const printData: PrintedKOT = {
      kotNo: kot.kotNo,
      tableNo: kot.tableNo,
      items: kot.items.map((it) => ({
        name: it.name,
        quantity: it.quantity,
        notes: it.notes || undefined
      })),
      createdAt: kot.createdAt,
      branchName: currentBranch?.name || branchName,
      cashier: cashierName,
      isUpdate: true,
      branchId
    };

    setMessage({ type: "success", text: `Sending KOT #${kot.kotNo} to kitchen printer...` });
    executePrintKOT(printData);
  };

  // Zustand store initialization
  const setPOSData = usePOSStore((state) => state.setPOSData);

  useEffect(() => {
    setPOSData({
      company: initialCompany,
      branch: { id: branchId, name: branchName },
      user: { name: cashierName, role, branchId: initialBranchId }
    });
  }, [initialCompany, branchId, branchName, cashierName, role, initialBranchId, setPOSData]);

  // Edit item modal states
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

  // Merge localStorage held orders with DB held invoices on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aarna_pos_held_orders");
      if (stored) {
        const localList: HeldOrder[] = JSON.parse(stored);
        setHeldOrders((prev) => {
          const combined = [...prev];
          localList.forEach((localOrder) => {
            if (!combined.some((o) => o.id === localOrder.id)) {
              combined.push(localOrder);
            }
          });
          return combined;
        });
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

  // Global keydown listener
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

      const originalProduct = products.find((p) => p.id === productId);
      const originalPrice = originalProduct ? originalProduct.price : 0;

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

  const cancelEditingSession = () => {
    clearCart();
    setEditingSession(null);
    setMessage({ type: "success", text: "Reset to new order session." });
  };

  // ==========================================
  // CLICK-TO-LOAD BILL / KOT HANDLERS
  // ==========================================

  // 1. Load Held Order into POS Inputs
  const resumeHeldOrder = (order: HeldOrder) => {
    setCart(order.cart);
    setClientName(order.clientName || "");
    setClientPhone(order.clientPhone || "");
    setBranchId(order.branchId || branchId);
    setTableNo(order.tableNo || "");
    setKotNotes(order.kotNotes || "");
    setDiscountType(order.discountType || "NONE");
    setDiscountValue(order.discountValue || 0);
    setPaymentMode(order.paymentMode || "CASH");
    
    setEditingSession({
      type: "HELD",
      id: order.id,
      dbId: order.dbId,
      tableNo: order.tableNo
    });

    setBillType("BILL");
    setShowHeldModal(false);
    setMessage({
      type: "success",
      text: `Loaded held bill: ${order.id}. Modify items/inputs and click 'Update Held' or 'Create Invoice'.`
    });
  };

  // 2. Load Active KOT into POS Inputs
  const loadKOT = (kot: ActiveKotItem) => {
    // Map KOT items to Cart items using product catalog for prices
    const parsedCart: CartItem[] = kot.items.map((it, idx) => {
      const isComp = it.name.startsWith("*COMP* ");
      const rawName = isComp ? it.name.replace("*COMP* ", "").trim() : it.name.trim();

      // Attempt matching product
      const matchedProd = products.find((p) => 
        (it.productId && p.id === it.productId) || 
        p.name.toLowerCase() === rawName.toLowerCase()
      );

      const price = isComp ? 0 : (matchedProd ? matchedProd.price : 0);

      return {
        productId: it.productId || (matchedProd ? matchedProd.id : `KOT_ITEM_${idx}_${Date.now()}`),
        name: rawName,
        price,
        quantity: it.quantity,
        isComplement: isComp,
        specification: it.notes || ""
      };
    });

    setCart(parsedCart);
    setTableNo(kot.tableNo || "");
    setKotNotes(kot.items[0]?.notes || "");
    
    setEditingSession({
      type: "KOT",
      id: kot.id,
      kotNo: kot.kotNo,
      tableNo: kot.tableNo
    });

    setBillType("KOT");
    setMessage({
      type: "success",
      text: `Loaded KOT #${kot.kotNo} (Table ${kot.tableNo}). Modify items/notes and click 'Update KOT & Print' or switch to bill.`
    });
  };

  // 3. Load Recent Invoice into POS Inputs
  const loadRecentInvoice = (inv: RecentInvoiceItem) => {
    if (inv.items && inv.items.length > 0) {
      const parsedCart: CartItem[] = inv.items.map((it) => {
        const isComp = it.name.startsWith("*COMP* ");
        const rawName = isComp ? it.name.replace("*COMP* ", "").trim() : it.name.trim();
        return {
          productId: it.productId || `INV_ITEM_${it.name}`,
          name: rawName,
          price: it.price,
          quantity: it.quantity,
          isComplement: isComp,
          specification: ""
        };
      });
      setCart(parsedCart);
    }

    setClientName(inv.clientName || "");
    setClientPhone(inv.clientPhone || "");
    setTableNo(inv.tableNo || "");
    setDiscountValue(inv.discount || 0);
    setDiscountType((inv.discount && inv.discount > 0) ? "FLAT" : "NONE");
    setPaymentMode((inv.paymentMode as any) || "CASH");

    setEditingSession({
      type: "INVOICE",
      id: inv.id,
      invoiceNo: inv.invoiceNo,
      tableNo: inv.tableNo
    });

    setBillType("BILL");
    setMessage({
      type: "success",
      text: `Loaded recent bill #${inv.invoiceNo}. You can modify and re-issue or print.`
    });
  };

  // ==========================================
  // HOLD BILL (CREATE & IN-PLACE UPDATE)
  // ==========================================
  const handleHoldInvoice = async () => {
    if (cart.length === 0) {
      setMessage({ type: "error", text: "Please add products to put the invoice on hold." });
      return;
    }

    setLoading(true);

    const subtotalVal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountAmount = 0;
    if (discountType === "PERCENT") discountAmount = subtotalVal * (discountValue / 100);
    else if (discountType === "FLAT") discountAmount = discountValue;
    else if (discountType === "EXEMPTED") discountAmount = subtotalVal;

    const cartInput = cart.map((item) => ({
      productId: item.productId,
      name: item.isComplement ? `*COMP* ${item.name}` : item.name,
      price: item.price,
      quantity: item.quantity,
      specification: item.specification,
      isComplement: item.isComplement
    }));

    // If already editing a held bill, update it in DB and state
    if (editingSession?.type === "HELD") {
      const res = await holdBill(
        cartInput,
        tableNo,
        clientName,
        clientPhone,
        discountAmount,
        discountType,
        discountValue,
        paymentMode,
        kotNotes,
        branchId,
        editingSession.dbId
      );

      if (res.success) {
        const updatedOrders = heldOrders.map((o) => {
          if (o.id === editingSession.id || (editingSession.dbId && o.dbId === editingSession.dbId)) {
            return {
              ...o,
              cart,
              clientName,
              clientPhone,
              tableNo,
              kotNotes,
              discountType,
              discountValue,
              paymentMode,
              createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
          }
          return o;
        });

        setHeldOrders(updatedOrders);
        localStorage.setItem("aarna_pos_held_orders", JSON.stringify(updatedOrders));
        setMessage({ type: "success", text: `Held order ${editingSession.id} updated successfully.` });
      } else {
        setMessage({ type: "error", text: res.error || "Failed to update held order in database." });
      }
    } else {
      // Create new held bill in DB & state
      const res = await holdBill(
        cartInput,
        tableNo,
        clientName,
        clientPhone,
        discountAmount,
        discountType,
        discountValue,
        paymentMode,
        kotNotes,
        branchId
      );

      const holdId = (res.success && res.invoiceNo) ? res.invoiceNo : `HOLD-${Date.now().toString().slice(-6)}`;
      const newHold: HeldOrder = {
        id: holdId,
        dbId: res.success ? res.heldId : undefined,
        cart,
        clientName,
        clientPhone,
        branchId,
        tableNo,
        kotNotes,
        discountType,
        discountValue,
        paymentMode,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const updated = [newHold, ...heldOrders];
      setHeldOrders(updated);
      localStorage.setItem("aarna_pos_held_orders", JSON.stringify(updated));
      setMessage({ type: "success", text: `Order put on hold: ${newHold.id}` });
      clearCart();
      setEditingSession(null);
    }

    setLoading(false);
  };

  const deleteHeldOrder = async (id: string, dbId?: string) => {
    if (dbId) {
      await deleteHeldInvoice(dbId);
    }
    const updated = heldOrders.filter((o) => o.id !== id && (!dbId || o.dbId !== dbId));
    setHeldOrders(updated);
    localStorage.setItem("aarna_pos_held_orders", JSON.stringify(updated));
    if (editingSession?.id === id || (dbId && editingSession?.dbId === dbId)) {
      setEditingSession(null);
      clearCart();
    }
  };

  // ==========================================
  // SEND / UPDATE KOT ACTION (WITH PRINTING)
  // ==========================================
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
        quantity: item.quantity,
        specification: item.specification,
        isComplement: item.isComplement
      };
    });

    // Check if we are updating an existing KOT
    if (editingSession?.type === "KOT") {
      const res = await updateKOT(editingSession.id, tableNo, cartInput, kotNotes);

      if (res.success && res.kot) {
        const printData: PrintedKOT = {
          kotNo: res.kot.kotNo,
          tableNo: res.kot.tableNo,
          items: res.kot.items.map((it: any) => ({
            name: it.name,
            quantity: it.quantity,
            notes: it.notes
          })),
          notes: kotNotes || undefined,
          createdAt: res.kot.createdAt,
          branchName: res.kot.branchName || branchName,
          cashier: res.kot.cashier || cashierName,
          isUpdate: true,
          branchId
        };

        setPrintMode("KOT");
        setPrintedKOT(printData);
        setPrintedInvoice(null);

        // Update local active KOTs list
        setLocalActiveKots((prev) => 
          prev.map((k) => k.id === editingSession.id ? {
            ...k,
            tableNo: res.kot.tableNo,
            items: res.kot.items.map((it: any) => ({
              id: it.id,
              productId: it.productId ?? null,
              name: it.name,
              quantity: it.quantity,
              notes: it.notes ?? null,
            })),
            createdAt: res.kot.createdAt
          } : k)
        );

        setMessage({ type: "success", text: `KOT #${res.kotNo} updated & kitchen ticket sent to printer!` });

        // Trigger thermal/fallback print
        executePrintKOT(printData);
      } else {
        setMessage({ type: "error", text: res.error || "Failed to update KOT." });
      }
    } else {
      // Create new KOT
      const res = await submitKOT(tableNo, cartInput, kotNotes, branchId);

      if (res.success && res.kot) {
        const printData: PrintedKOT = {
          kotNo: res.kot.kotNo,
          tableNo: res.kot.tableNo,
          items: res.kot.items.map((it: any) => ({
            name: it.name,
            quantity: it.quantity,
            notes: it.notes
          })),
          notes: kotNotes || undefined,
          createdAt: res.kot.createdAt,
          branchName: res.kot.branchName || branchName,
          cashier: res.kot.cashier || cashierName,
          isUpdate: false,
          branchId
        };

        setPrintMode("KOT");
        setPrintedKOT(printData);
        setPrintedInvoice(null);

        // Prepend to active KOTs list
        setLocalActiveKots((prev) => [
          {
            id: res.kot.id,
            kotNo: res.kot.kotNo,
            tableNo: res.kot.tableNo,
            status: "PENDING" as const,
            items: res.kot.items.map((it: any) => ({
              id: it.id,
              productId: it.productId ?? null,
              name: it.name,
              quantity: it.quantity,
              notes: it.notes ?? null,
            })),
            createdAt: res.kot.createdAt
          },
          ...prev
        ].slice(0, 15));

        setMessage({ type: "success", text: `KOT #${res.kotNo} placed & kitchen ticket sent to printer!` });
        clearCart();
        setEditingSession(null);

        // Trigger thermal/fallback print
        executePrintKOT(printData);
      } else {
        setMessage({ type: "error", text: res.error || "Failed to submit KOT." });
      }
    }

    setLoading(false);
  };

  // ==========================================
  // FINAL INVOICE CHECKOUT
  // ==========================================
  const handleCheckout = async () => {
    if (cart.length === 0) {
      setMessage({ type: "error", text: "Please add products to checkout." });
      return;
    }

    // If user is on KOT mode, route directly to handleKOT
    if (billType === "KOT") {
      await handleKOT();
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
        quantity: item.quantity,
        specification: item.specification,
        isComplement: item.isComplement
      };
    });

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

    const existingHeldDbId = editingSession?.type === "HELD" ? editingSession.dbId : undefined;
    const existingKotId = editingSession?.type === "KOT" ? editingSession.id : undefined;

    const res = await submitInvoice(
      cartInput, 
      paymentMode, 
      discountAmount, 
      tableNo, 
      clientName, 
      clientPhone,
      branchId,
      existingHeldDbId,
      existingKotId
    );

    if (res.success && res.invoice) {
      const printData: PrintedInvoice = {
        ...res.invoice,
        tableNo: tableNo || undefined,
        branchId,
        clientName: clientName || undefined,
        clientPhone: clientPhone || undefined
      };

      setPrintMode("INVOICE");
      setPrintedInvoice(printData);
      setPrintedKOT(null);
      setMessage({ type: "success", text: `Invoice generated successfully: ${res.invoiceNo}` });
      
      // If was a held order, remove from held list
      if (editingSession?.type === "HELD") {
        const updated = heldOrders.filter((o) => o.id !== editingSession.id && (!editingSession.dbId || o.dbId !== editingSession.dbId));
        setHeldOrders(updated);
        localStorage.setItem("aarna_pos_held_orders", JSON.stringify(updated));
      }

      // If was an active KOT, mark as SERVED in local state
      if (editingSession?.type === "KOT") {
        setLocalActiveKots((prev) => 
          prev.map((k) => k.id === editingSession.id ? { ...k, status: "SERVED" as const } : k)
        );
      }

      // Add to recent invoices list
      setLocalRecentInvoices((prev) => [
        {
          id: res.invoice.id,
          invoiceNo: res.invoiceNo,
          total: res.invoice.total,
          subtotal: res.invoice.subtotal,
          discount: res.invoice.discount,
          taxAmount: res.invoice.taxAmount,
          paymentMode: res.invoice.paymentMode,
          clientName: clientName || "",
          clientPhone: clientPhone || "",
          tableNo: tableNo || "",
          items: cartInput.map((it) => ({
            productId: it.productId,
            name: it.name,
            price: it.price,
            quantity: it.quantity,
            total: it.price * it.quantity
          })),
          createdAt: new Date().toISOString()
        },
        ...prev
      ].slice(0, 10));

      clearCart();
      setEditingSession(null);

      // Trigger thermal/fallback print
      executePrintInvoice(printData);
    } else {
      setMessage({ type: "error", text: res.error || "Failed to checkout invoice." });
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col space-y-3 p-4 max-w-[1600px] mx-auto h-screen overflow-hidden select-none relative">
      
      {/* Top Header Location & outlet switch */}
      <TopHeader
        branchName={branchName}
        role={role}
        branchId={branchId}
        setBranchId={setBranchId}
        branches={branches}
        printerStatus={printerStatus}
        onReconnectPrinter={checkPrinterConnection}
        activeReceiptPrinter={activeReceiptPrinter}
        setActiveReceiptPrinter={handleActiveReceiptPrinterChange}
        activeKotPrinter={activeKotPrinter}
        setActiveKotPrinter={handleActiveKotPrinterChange}
        availablePrinters={branches.find((b) => b.id === branchId)?.printers || []}
      />

      {/* ACTIVE EDITING NOTIFICATION BANNER */}
      {editingSession && (
        <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-zinc-900 border border-amber-500/40 rounded-xl px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-lg animate-in fade-in slide-in-from-top-1 duration-200 shrink-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-500 text-black">
              Editing {editingSession.type}
            </span>
            <span className="text-xs font-black text-white">
              {editingSession.kotNo || editingSession.id}
            </span>
            {editingSession.tableNo && (
              <span className="text-xs text-amber-400 font-extrabold">
                • Table: {editingSession.tableNo}
              </span>
            )}
            <span className="text-[10px] text-zinc-400 hidden md:inline">
              (Order inputs loaded. Modify cart/details below and click update or checkout.)
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {editingSession.type === "KOT" && (
              <button
                type="button"
                onClick={handleKOT}
                disabled={loading}
                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-[9px] uppercase rounded-lg transition-all cursor-pointer flex items-center gap-1 shadow-sm"
              >
                <Printer className="w-3 h-3" />
                <span>Update & Print KOT</span>
              </button>
            )}
            <button
              type="button"
              onClick={cancelEditingSession}
              className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-bold text-[9px] uppercase rounded-lg border border-zinc-700 transition-all cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Cancel Editing</span>
            </button>
          </div>
        </div>
      )}

      {/* MAIN 3-PANEL GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0 pb-12">
        
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
          isEditingKOT={editingSession?.type === "KOT"}
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
          handleHoldInvoice={handleHoldInvoice}
          isEditingHeld={editingSession?.type === "HELD"}
        />

      </div>

      {/* Floating Bottom Drawer Activity Board */}
      <div className={`bg-zinc-900 border border-zinc-800 rounded-t-2xl shadow-2xl transition-all duration-300 absolute bottom-0 left-4 right-4 z-40 ${
        isDrawerOpen ? "h-64" : "h-10"
      } flex flex-col overflow-hidden`}>
        
        {/* Drawer Header (Clickable to toggle) */}
        <div 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="px-5 py-2 bg-zinc-950/60 border-b border-zinc-850 flex items-center justify-between cursor-pointer hover:bg-zinc-950 transition-colors shrink-0"
        >
          <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Activity Registry Board</span>
            {!isDrawerOpen && (
              <span className="text-[9px] text-zinc-500 lowercase font-medium tracking-normal">
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

        {/* Drawer Body */}
        {isDrawerOpen && (
          <div className="p-4 flex-1 flex flex-col space-y-3 overflow-hidden">
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
                    className={`text-[10px] font-black uppercase tracking-wider pb-1.5 border-b-2 transition-all cursor-pointer ${
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
              
              {/* TAB 1: HELD ORDERS */}
              {bottomTab === "HELD" && (
                heldOrders.length === 0 ? (
                  <div className="col-span-full py-6 text-center text-xs text-zinc-600 font-medium">
                    No held orders available. Click 'Hold Bill' in summary to hold an order.
                  </div>
                ) : (
                  heldOrders.map((order) => (
                    <div 
                      key={order.id} 
                      onClick={() => resumeHeldOrder(order)}
                      className={`p-3 bg-zinc-950/50 hover:bg-zinc-950/90 border rounded-xl flex items-center justify-between gap-2 cursor-pointer transition-all group ${
                        editingSession?.id === order.id ? "border-amber-500 ring-1 ring-amber-500/30" : "border-zinc-850 hover:border-amber-500/50"
                      }`}
                    >
                      <div className="text-[10px] space-y-0.5 min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[7px] font-black rounded uppercase">HOLD</span>
                          <span className="font-extrabold text-zinc-200 truncate group-hover:text-amber-400">{order.id}</span>
                        </div>
                        <div className="text-zinc-400 font-bold truncate">{order.clientName || "Walk-in Customer"}</div>
                        <div className="text-[8.5px] text-zinc-500">
                          Table: <span className="text-zinc-300 font-bold">{order.tableNo || "N/A"}</span> • {order.cart.reduce((s, i) => s + i.quantity, 0)} items
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            resumeHeldOrder(order);
                          }}
                          className="px-2 py-1 bg-amber-500 hover:bg-amber-600 text-black text-[9px] font-black uppercase rounded cursor-pointer transition-all"
                        >
                          Load
                        </button>
                      </div>
                    </div>
                  ))
                )
              )}

              {/* TAB 2: ACTIVE KOTs */}
              {bottomTab === "ACTIVE_KOTS" && (
                localActiveKots.length === 0 ? (
                  <div className="col-span-full py-6 text-center text-xs text-zinc-600 font-medium">
                    No active kitchen orders found. Send a KOT to see it here.
                  </div>
                ) : (
                  localActiveKots.map((kot) => (
                    <div 
                      key={kot.id} 
                      onClick={() => loadKOT(kot)}
                      className={`p-3 bg-zinc-950/50 hover:bg-zinc-950/90 border rounded-xl flex items-center justify-between gap-2 cursor-pointer transition-all group ${
                        editingSession?.id === kot.id ? "border-cyan-400 ring-1 ring-cyan-400/30" : "border-zinc-850 hover:border-cyan-500/50"
                      }`}
                    >
                      <div className="text-[10px] space-y-0.5 min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[7px] font-black rounded uppercase">KOT</span>
                          <span className="font-extrabold text-zinc-200 truncate group-hover:text-cyan-300">#{kot.kotNo}</span>
                        </div>
                        <div className="text-[8.5px] text-zinc-400 font-bold">
                          Table: <span className="text-white font-extrabold">{kot.tableNo || "N/A"}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${kot.status === "SERVED" ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
                          <span className="text-[8px] uppercase font-bold text-zinc-400">{kot.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-[8px] text-zinc-600">{new Date(kot.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              reprintKOT(kot);
                            }}
                            className="text-[7.5px] font-bold uppercase text-zinc-400 hover:text-cyan-300 bg-zinc-900 hover:bg-zinc-850 px-1.5 py-0.5 rounded border border-zinc-800 flex items-center gap-1 cursor-pointer transition-colors"
                            title="Print Kitchen Ticket"
                          >
                            <Printer className="w-2.5 h-2.5" />
                            <span>Print</span>
                          </button>
                          <span className="text-[7.5px] font-bold uppercase text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                            Edit
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )
              )}

              {/* TAB 3: RECENT INVOICES */}
              {bottomTab === "RECENT_INVOICES" && (
                localRecentInvoices.length === 0 ? (
                  <div className="col-span-full py-6 text-center text-xs text-zinc-600 font-medium">
                    No recent invoices logged.
                  </div>
                ) : (
                  localRecentInvoices.map((inv) => (
                    <div 
                      key={inv.id} 
                      onClick={() => loadRecentInvoice(inv)}
                      className={`p-3 bg-zinc-950/50 hover:bg-zinc-950/90 border rounded-xl flex items-center justify-between gap-2 cursor-pointer transition-all group ${
                        editingSession?.id === inv.id ? "border-emerald-500 ring-1 ring-emerald-500/30" : "border-zinc-850 hover:border-emerald-500/50"
                      }`}
                    >
                      <div className="text-[10px] space-y-0.5 min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[7px] font-black rounded uppercase">BILL</span>
                          <span className="font-extrabold text-white truncate group-hover:text-emerald-400">{inv.invoiceNo}</span>
                        </div>
                        <div className="text-[8.5px] text-emerald-450 font-black">{currencySymbol}{inv.total.toFixed(2)}</div>
                        <div className="text-[8px] text-zinc-500">{new Date(inv.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-[8px] text-zinc-500">{new Date(inv.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              reprintInvoice(inv);
                            }}
                            className="text-[7.5px] font-bold uppercase text-zinc-400 hover:text-emerald-300 bg-zinc-900 hover:bg-zinc-850 px-1.5 py-0.5 rounded border border-zinc-800 flex items-center gap-1 cursor-pointer transition-colors"
                            title="Reprint Invoice"
                          >
                            <Printer className="w-2.5 h-2.5" />
                            <span>Print</span>
                          </button>
                          <span className="text-[7.5px] font-bold uppercase text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            View
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )
              )}

            </div>
          </div>
        )}
      </div>

      {/* Held Orders Selection Modal */}
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

      {/* ============================================================ */}
      {/* THERMAL RECEIPT & KOT PRINT TARGET (#thermal-receipt-target) */}
      {/* ============================================================ */}
      <div id="thermal-receipt-target" className="hidden print:block w-[80mm] text-[11px] font-mono leading-relaxed p-4 text-black bg-white">
        
        {/* KOT PRINT TEMPLATE */}
        {printMode === "KOT" && printedKOT && (
          <div>
            <div className="text-center font-black text-sm uppercase tracking-wider">{printedKOT.branchName}</div>
            <div className="text-center font-black text-xs uppercase my-1 border-b-2 border-black pb-1">
              {printedKOT.isUpdate ? "*** UPDATED KITCHEN TICKET ***" : "KITCHEN ORDER TICKET (KOT)"}
            </div>
            
            <div className="border-b border-black border-dashed py-1 my-1.5 text-[10px]">
              <div className="flex justify-between font-black text-xs">
                <span>KOT: #{printedKOT.kotNo}</span>
                <span>TABLE: {printedKOT.tableNo}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>SERVER: {printedKOT.cashier}</span>
                <span>TIME: {new Date(printedKOT.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div>DATE: {new Date(printedKOT.createdAt).toLocaleDateString()}</div>
            </div>

            <table className="w-full text-left text-[11px] border-collapse my-2">
              <thead>
                <tr className="border-b-2 border-black font-black">
                  <th className="py-1">ITEM</th>
                  <th className="py-1 text-right">QTY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/30">
                {printedKOT.items.map((item, idx) => (
                  <tr key={idx} className="align-top font-bold">
                    <td className="py-1 pr-2">
                      <div>{item.name}</div>
                      {item.notes && <div className="text-[9px] font-normal italic pl-1 text-zinc-800">↳ {item.notes}</div>}
                    </td>
                    <td className="py-1 text-right font-black text-xs">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {printedKOT.notes && (
              <div className="border-t border-b border-black border-dashed py-1 my-1.5 text-[10px]">
                <span className="font-bold block">SPECIAL INSTRUCTIONS:</span>
                <span className="italic">{printedKOT.notes}</span>
              </div>
            )}

            <div className="text-center text-[9px] mt-3 font-bold border-t border-black pt-1 uppercase">
              *** END OF KOT #{printedKOT.kotNo} ***
            </div>
          </div>
        )}

        {/* FINAL INVOICE PRINT TEMPLATE */}
        {printMode === "INVOICE" && printedInvoice && (
          <div>
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
                <span>{currencySymbol}{printedInvoice.subtotal.toFixed(2)}</span>
              </div>
              {printedInvoice.discount > 0 && (
                <div className="flex justify-between">
                  <span>DISCOUNT</span>
                  <span>-{currencySymbol}{printedInvoice.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>VAT (14%)</span>
                <span>{currencySymbol}{printedInvoice.taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-black text-xs pt-1 border-t border-dotted border-black">
                <span>GRAND TOTAL</span>
                <span>{currencySymbol}{printedInvoice.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-dashed border-black pt-2 mt-2 text-center text-[10px] uppercase">
              <div>PAYMENT MODE: {printedInvoice.paymentMode}</div>
              <div className="font-bold mt-2 tracking-widest text-[9px]">*** THANK YOU ***</div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
