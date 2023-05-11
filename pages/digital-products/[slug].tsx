import React from "react";
import { getSingleDigitalProduct } from "@/services/notion";

interface DigitalProductsPageProps {
  product: any;
}

export default function DigitalProductsPage({ product }: any) {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <h1>{product.properties.Title.title[0].plain_text}</h1>
        {/* <p>{product.properties}</p> */}
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const paths: any = [];
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: any) => {
  const product = await getSingleDigitalProduct(params.slug);
  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};
