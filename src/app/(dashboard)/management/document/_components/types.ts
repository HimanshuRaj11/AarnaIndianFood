export type PaymentMode = "Bank Transfer" | "Cash";

export interface CompanyInfo {
  id?: string;
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  email?: string | null;
  phone?: string;
  website?: string | null;
  VATNumber?: string | null;
  logoUrl?: string | null;
  description?: string | null;
  currencyName?: string;
  currencyCode?: string;
  currencySymbol?: string;
}

export interface PayslipData {
  employeeName: string;
  employeeId: string;
  designation: string;
  department: string;
  paymentMode: PaymentMode;
  bankName: string;
  accountNumber: string;
  payPeriod: string;
  workedDays: string;
  lopDays: string;

  // Earnings
  basic: number;
  hra: number;
  conveyance: number;
  special: number;

  // Deductions
  providentFund: number;
  incomeTax: number;
  professionalTax: number;
  otherDeductions: number;
}

export interface OfferLetterData {
  candidateName: string;
  candidateAddress: string;
  candidateEmail: string;
  candidatePhone: string;
  designation: string;
  department: string;
  paymentMode: PaymentMode;
  monthlySalary: number;
  joiningDate: string;
  reportingManager: string;
  probationPeriod: string;
  deadlineDate: string;
}
