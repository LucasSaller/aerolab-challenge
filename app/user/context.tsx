"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  addPoints,
  getRedeemHistory,
  getUser,
  redeemProduct,
} from "../api/user"; // Asegúrate de importar tu función getUser desde donde sea que esté definida
import { User, UserContextType } from "../types/user";
import Loader from "../components/Loader";
import { Product } from "../types/product";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [status, setStatus] = useState<"pending" | "resolved" | "rejected">(
    "pending"
  );

  const handleRedeem = async (product: Product) => {
    if (!user) return;
    const res = await redeemProduct(product);
    setUser({
      ...user,
      points: user.points - product.cost,
      redeemHistory: [
        ...user.redeemHistory,
        { ...product, productId: product._id },
      ],
    });
  };

  const handleAddPoints = async (amount: number) => {
    if (!user) return;
    const res = await addPoints(amount);
    setUser({
      ...user,
      points: user.points + amount,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        const redeemHistory = await getRedeemHistory();
        setUser({
          ...userData,
          redeemHistory,
        });
        setStatus("resolved");
      } catch (error) {
        console.error("Error fetching user:", error);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);
  if (!user || status === "pending") {
    return (
      <div className="flex min-h-screen flex-col items-center bg-gray-100">
        <Loader />
      </div>
    );
  }
  const state: UserContextType["state"] = {
    user,
  };
  const actions: UserContextType["actions"] = {
    addPoints: handleAddPoints,
    redeem: handleRedeem,
  };
  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};
