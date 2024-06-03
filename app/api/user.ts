import { Product } from "../types/product";
import instance from "./axios";

export async function getUser() {
  const res = await instance.get("/user/me");
  return res.data;
}

export async function addPoints(amount: number) {
  const res = await instance.post("/user/points", { amount });
  return res.data;
}

export async function redeemProduct(product: Product) {
  const res = await instance.post("/redeem", { productId: product._id });
  return res.data;
}

export async function getRedeemHistory() {
  const res = await instance.get("/user/history");
  return res.data;
}
