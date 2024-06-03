"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import ProductCard from "./ProductCard";
import { Filter } from "./types";
import Count from "./Count";
import Filters from "./Filters";
import Pagination from "../Pagination";
import { HoverEffect } from "../ui/HoverEffect";

interface ProductsProp {
  products: Product[];
}

const Products = ({ products }: ProductsProp) => {
  const [filter, setFilter] = useState<Filter>(Filter.MostRecent);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

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

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [currentPage, filteredProducts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentCount =
    currentPage * productsPerPage > filteredProducts.length
      ? filteredProducts.length
      : currentPage * productsPerPage;

  return (
    <div className="max-w-xs md:max-w-7xl mx-auto py-10 ">
      <div className="flex flex-col lg:flex-row items-center gap-3 border-b-2 px-4 py-5 border-black/20">
        <Count current={currentCount} total={products.length} />
        <span className="h-3/4 border-r border-black/40"></span>
        <Filters active={filter} onChange={setFilter} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="grid py-10 grid-cols-1 lg:grid-cols-4 gap-6 px-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {/* <HoverEffect items={paginatedProducts} /> */}
      </div>
      <div className="flex flex-row items-center">
        <div className="flex-1">
          <Count current={currentCount} total={products.length} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
