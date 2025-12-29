
export enum LeaveStatus {
  APPROVED = 'Approved',
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  REJECTED = 'Rejected'
}

export interface LeaveRequest {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: LeaveStatus;
  icon: string;
  colorClass: string;
}

export interface LeaveBalance {
  type: string;
  used: number;
  total: number;
  icon: string;
  colorClass: string;
}

export interface Appraisal {
  id: string;
  packetNumber: string;
  customerName: string;
  loanAmount: number;
  grossWeight: number;
  purity: string;
  date: string;
  isSpurious: boolean;
}

export type ViewType = 'dashboard' | 'leaves' | 'appraisals' | 'profile';
