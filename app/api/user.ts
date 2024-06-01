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
  console.log(res);
  return res.data;
}
