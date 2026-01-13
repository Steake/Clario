export enum UserRole {
  PUBLIC = 'PUBLIC',
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR',
  ADMIN = 'ADMIN'
}

export interface Tutor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  subjects: string[];
  rate: number;
  currency: string;
  rating: number;
  reviews: number;
  isHuman: boolean;
  trustScore: number;
}

export interface Booking {
  id: string;
  title: string;
  tutor: Tutor;
  date: string;
  time: string;
  status: 'Live Now' | 'Upcoming' | 'Completed' | 'Pending';
  platformFee: number;
  total: number;
}

export interface Transaction {
  id: string;
  type: 'Payment' | 'Escrow' | 'Refund' | 'Deposit';
  party: string;
  avatar?: string;
  date: string;
  status: 'Completed' | 'In Escrow' | 'Refunded';
  amount: string;
  currency: string;
  isNegative: boolean;
}