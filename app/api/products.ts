import { Product } from "../types/product";
import instance from "./axios";
export async function getProducts() {
  const res = await instance.get("/products");
  return res.data;
}
export async function getProductByName(name: string) {
  const products = await getProducts();
  return products.find((product: { name: string }) => product.name === name);
}
