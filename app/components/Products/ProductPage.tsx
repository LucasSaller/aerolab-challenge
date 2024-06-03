import React from "react";
import { Product } from "@/app/types/product";
import Link from "next/link";
import "@/app/globals.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ProductCard from "./ProductCard";

interface ProductPageProps {
  product: Product;
  relatedProducts: Product[];
}
const ProductPage: React.FC<ProductPageProps> = ({
  product,
  relatedProducts,
}) => {
  console.log(relatedProducts);
  return (
    <div className=" min-h-screen py-8">
      <div className="max-w-screen-lg mx-auto p-8 bg-whiterounded-lg shadow-md">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg font-semibold text-gray-800">${product.cost}</p>
          <div className="flex flex-row gap-2 items-center text-white font-medium  py-2 px-4 bg-black/85">
            <FaArrowAltCircleLeft />
            <Link className=" " href="/">
              Back to home
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-4">
            <img
              src={product.img.hdUrl}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-4">
            <button className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700">
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Related Products
          </h2>
          {relatedProducts.length == 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-800/80 mb-4">
                No related products found!
              </h2>
            </div>
          )}
          <ul className="flex flex-row gap-3">
            {relatedProducts.map((relatedProduct) => (
              <li key={relatedProduct.name} className="mb-4 ">
                <ProductCard product={relatedProduct} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
