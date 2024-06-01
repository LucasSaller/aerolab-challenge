export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
  createDate: string;
}
export interface UserContextType {
  state: {
    user: User;
  };
  actions: {
    addPoints: (amount: number) => Promise<void>;
  };
}
