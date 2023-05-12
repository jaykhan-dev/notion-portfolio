import React from "react";
import { notion } from "../../services/notion";
import Image from "next/image";
import styles from "../../styles/wallpapers.module.css";
import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import { stripe } from "@/services/stripe";

interface WebTemplate {
  id: string;
  title: string;
}

export default function DigitalProducts({ products }: any) {
  if (!products) return <div>no data!</div>;
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Selected projects in graphics and frontend"
        />
      </Head>
      <PageHeader title="Digital Projects" image={styles.digitalProductsBg} />
      <div className="lg:w-2/3 mx-auto my-20">
        <div className="flex items-center justify-between border-b py-4 mb-4 border-white/20">
          {/* <Image src="../images/" width={50} height={50} alt="" /> */}

          <div className="flex space-x-4 items-center px-4">
            <form action="">
              <label>Price: </label>
              <select
                name="cars"
                id="cars"
                className="border bg-black text-white border-white/20 rounded-xl ml-4"
              >
                <option value="volvo">Free</option>
                <option value="saab">$5</option>
                <option value="opel">$100</option>
              </select>
            </form>
            <form action="">
              <label>Type: </label>
              <select
                name="cars"
                id="cars"
                className="border bg-black text-white border-white/20 rounded-xl ml-4"
              >
                <option value="volvo">Templates</option>
                <option value="saab">Music</option>
                <option value="opel">Stories</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 py-10 lg:p-0 p-4">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="border border-white/20 p-4 rounded-xl"
            >
              <Image
                src={product.images[0]}
                width={800}
                height={400}
                alt="img"
              />
              <h2 className="lg:text-4xl font-bold">{product.name}</h2>
              <p>{product.description}</p>

              <Link href={`/digital-products/`}>
                <p className="mono text-purple-500">See more</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await stripe.products.list();

  console.log(products);
  return {
    props: {
      products: products.data,
    },
    revalidate: 30,
  };
}
