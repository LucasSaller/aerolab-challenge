import { Product } from "./product";
import { RedeemHistoryItem } from "./product";
export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: RedeemHistoryItem[];
  createDate: string;
}
export interface UserContextType {
  state: {
    user: User;
  };
  actions: {
    addPoints: (amount: number) => Promise<void>;
    redeem: (product: Product) => Promise<void>;
  };
}
