import React from "react";
import { UserContext } from "./context";
import { User, UserContextType } from "../types/user";
export function usePoints(): [
  UserContextType["state"]["user"]["points"],
  UserContextType["actions"]["addPoints"]
] {
  const {
    state: { user },
    actions: { addPoints },
  } = React.useContext(UserContext);
  return [user?.points, addPoints];
}

export function useUser(): UserContextType["state"]["user"] {
  const {
    state: { user },
  } = React.useContext(UserContext);
  return user;
}
