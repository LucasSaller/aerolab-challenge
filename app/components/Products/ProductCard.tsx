"use client";
import React from "react";
import { Product } from "../../types/product";
import Image from "next/image";
import { usePoints, useRedeem } from "@/app/user/hooks";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [points, _] = usePoints();
  const redeem = useRedeem();
  const canBuy = product.cost <= points;

  const handleRedeem = (product: Product) => {
    if (canBuy) {
      return redeem(product);
    }
  };

  return (
    <div className="group flex lg:items-baseline relative flex-col p-5 rounded-lg bg-white shadow-md border-b-1 gap-3 transition-all ease-in hover:scale-[1.03]">
      {canBuy ? (
        <Image
          className="absolute top-2 right-2 cursor-pointer opacity-100 group-hover:opacity-0"
          src="/assets/buy-blue.svg"
          alt="buy"
          width={30}
          height={30}
        />
      ) : (
        <div className="flex flex-row self-end items-center">
          <span className="py-2 px-4 rounded-full text-white bg-black opacity-60 text-[10px] flex items-center  gap-1">
            You need {product.cost - points}
            <Image
              src="/assets/coin.svg"
              alt="coin"
              width={0}
              height={0}
              style={{ width: "20px", height: "auto" }}
            />
          </span>
        </div>
      )}
      <div className="flex-1">
        <Image
          className="object-contain"
          src={product.img.hdUrl}
          width={200}
          height={200}
          alt={product.name}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>
      <span className="w-full h-1 border-b border-black/10"></span>
      <div className="m-0 ">
        <h2 className="text-black/65 text-sm">{product.category}</h2>
        <h2 className="text-black">{product.name}</h2>
      </div>
      {/* <Link href={`/products/${encodeURIComponent(product.name)}`}>
        <button className="text-white bg-black py-2 px-4 rounded-full">
          Ver producto
        </button>
      </Link> */}
      {canBuy && (
        <div className="absolute top-0 left-0 bg-sky-400 opacity-0 w-full h-full transition-all ease-in group-hover:opacity-95">
          <div className="flex flex-col gap-2 h-full justify-center items-center">
            <Image
              className="absolute top-3 right-2 cursor-pointer"
              src="/assets/buy-white.svg"
              alt="buy"
              width={30}
              height={30}
            />
            <div className="flex flex-row gap-1 items-center">
              <span className="text-2xl font-bold">{product.cost}</span>
              <Image src="/assets/coin.svg" alt="coin" width={22} height={22} />
            </div>
            <button
              className="bg-white px-10 py-3 rounded-full text-black text-sm"
              onClick={() => handleRedeem(product)}
            >
              Redeem now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
