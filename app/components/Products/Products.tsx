"use client";
import React, { useMemo, useState } from "react";

import { Product } from "../../types/product";
import ProductCard from "./ProductCard";
import { Filter } from "./types";
import Count from "./Count";
import Filters from "./Filters";

interface ProductsProp {
  products: Product[];
}

const Products = ({ products }: ProductsProp) => {
  const [filter, setFilter] = useState<Filter>(Filter.MostRecent);
  const filteredProducts = useMemo(() => {
    switch (filter) {
      case Filter.HighestPrice: {
        return [...products].sort((a, b) => b.cost - a.cost);
      }
      case Filter.LowetPrice: {
        return [...products].sort((a, b) => a.cost - b.cost);
      }
      case Filter.MostRecent:
      default: {
        return products;
      }
    }
  }, [filter, products]);

  return (
    <div className="max-w-xs md:max-w-7xl mx-auto py-10 ">
      <div className="flex flex-row items-center gap-3 border-b-2 px-4 py-5 h-[80px] border-black/20">
        <Count current={filteredProducts.length} total={products.length} />
        <Filters active={filter} onChange={setFilter} />
      </div>
      <div className="grid py-10 grid-cols-1 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Count current={filteredProducts.length} total={products.length} />
    </div>
  );
};

export default Products;
