import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardNav from "./_components/DashboardNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white antialiased">
      {/* Sidebar Nav (hidden on native print events) */}
      <div className="print:hidden">
        <DashboardNav role={user.role} userName={user.name} />
      </div>

      {/* Main Workspace Frame */}
      <main className="flex-1 min-w-0 overflow-y-auto h-screen scrollbar-thin bg-zinc-950/25">
        {children}
      </main>
    </div>
  );
}
