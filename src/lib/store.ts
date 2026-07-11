import { create } from "zustand";

export interface CompanyData {
  id: string;
  name: string;
  currencyCode: string;
  currencySymbol: string;
}

export interface BranchData {
  id: string;
  name: string;
}

export interface UserData {
  name: string;
  role: string;
  branchId: string | null;
}

interface POSState {
  company: CompanyData | null;
  branch: BranchData | null;
  user: UserData | null;
  setPOSData: (data: { company: CompanyData | null; branch: BranchData | null; user: UserData | null }) => void;
}

export const usePOSStore = create<POSState>((set) => ({
  company: null,
  branch: null,
  user: null,
  setPOSData: (data) => set(data),
}));
