import instance from "./axios";
export async function getProduts() {
  const res = await instance.get("/products");
  return res.data;
}
