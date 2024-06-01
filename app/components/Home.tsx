"use client";
import React, { useState, useEffect } from "react";
import Products from "@/app/components/Products/Products";
import { Product } from "@/app/types/product";
import { getProduts } from "../api/products";

import Image from "next/image";
import Loader from "./Loader";

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"pending" | "resolved" | "rejected">(
    "pending"
  );
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProduts();
        setProducts(products);
        setStatus("resolved");
      } catch (error) {
        console.error("Error fetching products:", error);
        setStatus("rejected");
      }
    };

    fetchProducts();
  }, []);
  if (status == "pending") {
    return <Loader />;
  }
  return (
    <div className="w-full mt-20">
      <div className="w-full h-[350px] p-4 relative  ">
        <Image
          className="z-1 object-cover object-center "
          src="/assets/header-x2.png"
          alt="header"
          fill
          quality={100}
          priority
        />
        <h2 className="text-white text-5xl z-10 absolute bottom-10 left-40 tracking-wide font-bold">
          Electronics
        </h2>
      </div>
      {status === "resolved" && <Products products={products} />}
    </div>
  );
};

export default HomeScreen;
