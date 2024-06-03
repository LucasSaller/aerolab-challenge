import React from "react";
import "@/app/globals.css";
import { useUser } from "@/app/user/hooks";
import { RedeemHistoryItem } from "@/app/types/product";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";

const History = () => {
  const user = useUser();
  if (!user || !user.redeemHistory || user.redeemHistory.length === 0) {
    return (
      <div className="flex min-h-screen flex-col p-10 bg-gray-100">
        <h1 className="text-black text-2xl lg:text-5xl  lg:left-40 tracking-wide font-bold">
          No hay historial de productos
        </h1>
      </div>
    );
  }

  // Objeto para mapear IDs de productos a la cantidad total comprada
  const productCounts: { [productId: string]: number } = {};
  user.redeemHistory.forEach((item: RedeemHistoryItem) => {
    const productId = item.productId;
    if (productId in productCounts) {
      productCounts[productId] += 1;
    } else {
      productCounts[productId] = 1;
    }
  });
  return (
    <div className="py-10 px-4 ">
      <div className="flex flex-row justify-between py-2">
        <h1 className="text-gray-900 font-medium text-2xl mb-5">
          History products
        </h1>
        <Link
          className="flex flex-row items-center gap-2 h-10 text-black bg-gray-200 font-medium py-2 px-4 rounded-md"
          href="/"
        >
          <FaArrowAltCircleLeft />
          Back to home
        </Link>
      </div>
      <div className="overflow-x-auto font-mono px-0 ">
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-100 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-4 py-3">
                Product
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Quantity
              </th>
              <th scope="col" className="px-4 py-3">
                Cost
              </th>
              <th scope="col" className="px-4 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(productCounts).map((productId, index) => {
              const item = user.redeemHistory.find(
                (historyItem) => historyItem.productId === productId
              );
              if (!item) return null;
              return (
                <tr key={index} className="border-b border-gray-200  ">
                  <th
                    scope="row"
                    className="flex flex-col md:flex-row items-center  py-2 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <Image
                      className="object-contain"
                      src={item.img.hdUrl}
                      width={100}
                      height={100}
                      alt={item.name}
                      style={{ width: "auto", height: "auto" }}
                      priority
                    />

                    {item.name}
                  </th>
                  <td className="px-4 py-2">
                    <span className="bg-[#dbeafe] text-[#1e40af] text-xs font-medium px-2 py-0.5 rounded ">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
                    {productCounts[productId]}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
                    {item.cost}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
                    {item.cost * productCounts[productId]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row justify-end p-10 ">
          <Link
            className="flex flex-row items-center gap-2 text-black font-medium bg-gray-200 py-2 px-4 rounded-md"
            href="/"
          >
            <FaArrowAltCircleLeft />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
