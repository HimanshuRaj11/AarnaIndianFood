"use client";

import { useState } from "react";
import { deleteStaffMember } from "../actions";
import { Trash2, ShieldAlert, Loader2 } from "lucide-react";

interface StaffMember {
  id: string;
  name: string;
  email: string;
  role: string;
  branchName: string;
}

interface StaffTableProps {
  staffList: StaffMember[];
  currentUserId: string;
}

export default function StaffTable({ staffList, currentUserId }: StaffTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    if (id === currentUserId) {
      alert("You cannot delete your own admin account.");
      return;
    }

    if (!confirm(`Are you sure you want to delete staff member "${name}"?`)) {
      return;
    }

    setDeletingId(id);
    setError(null);

    const res = await deleteStaffMember(id);
    if (!res.success) {
      setError(res.error || "Failed to delete staff member.");
      setDeletingId(null);
    } else {
      setDeletingId(null);
    }
  };

  return (
    <div className="w-full space-y-4 select-none">
      {error && (
        <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-200 text-sm flex items-start gap-2 max-w-md">
          <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40">
        <table className="w-full border-collapse text-left text-sm text-zinc-300">
          <thead className="bg-zinc-900/80 text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email Address</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Assigned Branch</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {staffList.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-zinc-500">
                  No staff members registered.
                </td>
              </tr>
            ) : (
              staffList.map((member) => (
                <tr key={member.id} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">{member.name}</td>
                  <td className="px-6 py-4 text-zinc-400 font-mono text-xs">{member.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        member.role === "ADMIN"
                          ? "bg-red-500/10 text-red-450 border border-red-500/20"
                          : member.role === "MANAGER"
                          ? "bg-amber-500/10 text-amber-450 border border-amber-500/20"
                          : "bg-blue-500/10 text-blue-450 border border-blue-500/20"
                      }`}
                    >
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-400">{member.branchName}</td>
                  <td className="px-6 py-4 text-right">
                    {member.id === currentUserId ? (
                      <span className="text-xs text-zinc-500 italic px-2">Active Admin</span>
                    ) : (
                      <button
                        onClick={() => handleDelete(member.id, member.name)}
                        disabled={deletingId === member.id}
                        className="p-2 text-zinc-550 hover:text-red-400 rounded-lg hover:bg-red-500/5 transition-all cursor-pointer inline-flex items-center"
                      >
                        {deletingId === member.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
