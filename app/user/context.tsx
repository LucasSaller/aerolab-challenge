"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { addPoints, getUser } from "../api/user"; // Asegúrate de importar tu función getUser desde donde sea que esté definida
import { User, UserContextType } from "../types/user";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [status, setStatus] = useState<"pending" | "resolved" | "rejected">(
    "pending"
  );
  const handleAddPoints = async (amount: number) => {
    if (!user) return;
    const res = await addPoints(amount);
    setUser({ ...user, points: user.points + amount });
    console.log(res);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        setStatus("resolved");
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
  if (!user || status === "pending") {
    return (
      <div className="flex min-h-screen flex-col items-center bg-gray-100">
        <h2 className="text-black">Buscando usuario...</h2>
      </div>
    );
  }
  const state: UserContextType["state"] = {
    user,
  };
  const actions: UserContextType["actions"] = {
    addPoints: handleAddPoints,
  };
  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};
