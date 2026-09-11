"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutUser } from "../../(auth)/login/actions";
import { 
  LayoutDashboard, 
  Utensils, 
  Users, 
  LogOut, 
  ShieldCheck,
  Receipt,
  ChefHat,
  Building2,
  BookOpen,
  Tags,
  Percent,
  Briefcase,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  User,
  FileText,
  Printer
} from "lucide-react";
import { useState } from "react";

interface DashboardNavProps {
  role: "ADMIN" | "MANAGER" | "STAFF" | "OWNER";
  userName: string;
}

export default function DashboardNav({ role, userName }: DashboardNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingOut(true);
    await logoutUser();
    router.push("/login");
    router.refresh();
  };

  const navItems = [
    { name: "POS Billing", href: "/pos", icon: Utensils },
    { name: "Overview", href: "/overview", icon: LayoutDashboard },
    { name: "My Profile", href: "/profile", icon: User },
    { name: "Data Summary", href: "/management/data-summary", icon: BarChart2 },
  ];

  if (role === "ADMIN" || role === "MANAGER" || role === "OWNER") {
    navItems.push(
      { name: "Documents", href: "/management/document", icon: FileText }
    );
  }

  if (role === "ADMIN" || role === "OWNER") {
    navItems.push(
      { name: "Invoices & Billing", href: "/management/invoices", icon: Receipt },
      { name: "KOT History Logs", href: "/management/kots", icon: ChefHat },
      { name: "Staff Directory", href: "/management/staff", icon: Users },
      { name: "Branch Mappings", href: "/management/branches", icon: Building2 },
      { name: "Printer Stations", href: "/management/printers", icon: Printer },
      { name: "Menu Catalog", href: "/management/products", icon: BookOpen },
      { name: "Menu Categories", href: "/management/categories", icon: Tags },
      { name: "Tax Configurations", href: "/management/taxes", icon: Percent },
      { name: "Company Profile", href: "/management/company", icon: Briefcase }
    );
  }

  return (
    <aside className={`bg-zinc-950 border-r border-zinc-900 flex flex-col justify-between h-screen sticky top-0 shrink-0 transition-all duration-300 ${
      isCollapsed ? "w-20" : "w-64"
    }`}>
      
      {/* Brand & User Block */}
      <div className="p-4 sm:p-6 space-y-6 flex-grow overflow-y-auto scrollbar-none">
        
        {/* Brand Logo & Collapse Toggle */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-black text-white text-sm shadow-md shadow-orange-500/10 shrink-0">
              A
            </div>
            {!isCollapsed && (
              <div className="animate-in fade-in duration-200">
                <h1 className="text-sm font-extrabold text-white uppercase tracking-wider leading-none">Aarna India</h1>
                <span className="text-[10px] text-zinc-500 mt-1 block">Restaurant Billing OS</span>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 text-zinc-500 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all cursor-pointer"
            aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* User Card */}
        <div className={`p-3 bg-zinc-900/40 border border-zinc-900 rounded-xl flex items-center gap-3 ${
          isCollapsed ? "justify-center" : ""
        }`}>
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0 animate-in fade-in duration-200">
              <p className="text-xs font-bold text-white truncate">{userName}</p>
              <span className="text-[9px] text-zinc-500 font-semibold tracking-wider uppercase">{role}</span>
            </div>
          )}
        </div>

        {/* Navigation List */}
        <nav className="space-y-1.5 pt-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                title={isCollapsed ? item.name : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCollapsed ? "justify-center px-0" : ""
                } ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/20 text-amber-500 font-black"
                    : "border border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/40"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span className="animate-in fade-in duration-200">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Action */}
      <div className="p-4 sm:p-6 border-t border-zinc-900">
        <form onSubmit={handleLogout}>
          <button
            type="submit"
            disabled={loggingOut}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-red-950/20 border border-zinc-800 hover:border-red-900/30 text-zinc-400 hover:text-red-400 font-bold rounded-xl text-xs transition-all cursor-pointer disabled:opacity-50 ${
              isCollapsed ? "px-0 py-2.5" : ""
            }`}
            title={isCollapsed ? "Logout" : undefined}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span className="animate-in fade-in duration-200">{loggingOut ? "Logging out..." : "Logout"}</span>}
          </button>
        </form>
      </div>

    </aside>
  );
}
