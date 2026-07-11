"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu as MenuIcon, X, UtensilsCrossed, Phone, Clock } from "lucide-react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Safely read cart count on mount and register storage listener
  useEffect(() => {
    const updateCartCount = () => {
      try {
        const stored = localStorage.getItem("aarna_customer_cart");
        if (stored) {
          const items = JSON.parse(stored);
          const totalQty = items.reduce((sum: number, item: any) => sum + item.quantity, 0);
          setCartCount(totalQty);
        } else {
          setCartCount(0);
        }
      } catch (err) {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("aarna_cart_update", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("aarna_cart_update", updateCartCount);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Branches", href: "/branches" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans select-none antialiased">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-black py-1.5 px-4 text-center text-xs font-bold flex items-center justify-center gap-4">
        <span className="flex items-center gap-1">
          <Phone className="w-3.5 h-3.5" /> Call for Reservations: +91 11 2341 5678
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> Hours: 11:00 AM - 11:00 PM
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white uppercase block leading-none">AARNA</span>
              <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mt-1 block">INDIAN FOODS</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-1 hover:text-amber-500 ${
                    active ? "text-amber-500 font-bold" : "text-zinc-400"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions - Cart & Login */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link
              href="/cart"
              className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 text-zinc-300 hover:text-amber-500 rounded-xl transition-all relative flex items-center justify-center"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-black font-black text-[10px] min-w-5 h-5 rounded-full flex items-center justify-center border-2 border-zinc-950 px-1">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login button for staff */}
            <Link
              href="/login"
              className="hidden sm:inline-flex py-2 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-semibold rounded-xl text-xs transition-all"
            >
              Staff Portal
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-900 bg-zinc-950 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                    active 
                      ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold rounded-xl text-sm border border-zinc-800"
            >
              Staff Portal
            </Link>
          </div>
        )}
      </header>

      {/* Main Page Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-zinc-900 pb-12 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-black text-white text-sm">
                <UtensilsCrossed className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-black text-white uppercase tracking-wider">AARNA FOODS</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Serving the authentic, rich spices and flavors of India. Crafted by master chefs utilizing hand-ground spice blends and the finest local ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Get In Touch</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>12 Radial Road, Connaught Place</li>
              <li>New Delhi, DL 110001</li>
              <li>Email: info@aarnaindianfood.com</li>
              <li>Phone: +91 11 2341 5678</li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Operating Hours</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Monday - Sunday<br />
              11:00 AM - 11:00 PM<br />
              <span className="text-amber-500 font-semibold mt-2 block">Dine-in, Takeaway & Home Delivery</span>
            </p>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[10px]">
          <span>© {new Date().getFullYear()} Aarna Indian Foods. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-zinc-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
