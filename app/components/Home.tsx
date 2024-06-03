import Products from "@/app/components/Products/Products";
import { getProducts } from "../api/products";

import Image from "next/image";

const HomeScreen = async () => {
  const products = await getProducts();

  return (
    <div className="w-full">
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
      <Products products={products} />
    </div>
  );
};

export default HomeScreen;
