import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { getProductByName, getProducts } from "@/app/api/products"; // Asegúrate de ajustar la ruta según tu estructura de proyecto
import { Product } from "@/app/types/product";

interface ProductPageProps {
  product: Product;
}
const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.cost}</p>
      <img src={product.img.url} alt={product.name} />
      {/* Añade más detalles del producto aquí */}
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();

  const paths = products.map((product: { name: string }) => ({
    params: { name: product.name },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = params?.name as string;
  const product = await getProductByName(name);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return { props: { product } };
};

export default ProductPage;
