import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { getProductByName, getProducts } from "@/app/api/products"; // Asegúrate de ajustar la ruta según tu estructura de proyecto
import { Product } from "@/app/types/product";
import ProductPage from "../../app/components/Products/ProductPage";
import Loader from "@/app/components/Loader";

interface ProductProps {
  product: Product;
  relatedProducts: Product[];
}
const Produc: React.FC<ProductProps> = ({ product, relatedProducts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex min-h-screen bg-white">
        <Loader />
      </div>
    );
  }

  return <ProductPage product={product} relatedProducts={relatedProducts} />;
};
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();

  const paths = products.map((product: { name: string }) => ({
    params: { name: encodeURIComponent(product.name) },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = decodeURIComponent(params?.name as string);
  const product = await getProductByName(name);
  const allProducts = await getProducts();
  if (!product) {
    return {
      notFound: true,
    };
  }
  const relatedProducts = allProducts.filter(
    (p: Product) => p.category === product.category && p.name !== product.name
  );
  return { props: { product, relatedProducts } };
};

export default Produc;
