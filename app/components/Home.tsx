"use client";
import React, { useState, useEffect } from "react";
import Products from "@/app/components/Products/Products";
import { Product } from "@/app/types/product";
import { getProducts } from "../api/products";

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
        const products = await getProducts();
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
      <div className="w-full md:h-[350px] p-4 relative h-[100px] ">
        <Image
          className="z-1 object-cover object-center "
          src="/assets/header-x2.png"
          alt="header"
          fill
          quality={100}
          priority
        />
        <h2 className="text-white text-2xl lg:text-5xl z-10 absolute bottom-2 md:bottom-10 lg:left-40 tracking-wide font-bold">
          Electronics
        </h2>
      </div>
      {status === "resolved" && <Products products={products} />}
    </div>
  );
};

export default HomeScreen;
