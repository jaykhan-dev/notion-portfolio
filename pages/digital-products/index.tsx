import React from "react";
import { notion } from "../../services/notion";
import Image from "next/image";
import styles from "../../styles/wallpapers.module.css";
import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

interface WebTemplate {
  id: string;
  title: string;
}

export default function DigitalProducts({ webTemplates }: any) {
  if (!webTemplates) return <div>no data!</div>;
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
        <div className="flex items-center justify-between border-b-4 py-4 mb-4 border-white/20">
          {/* <Image src="../images/" width={50} height={50} alt="" /> */}

          <div className="flex space-x-4 items-center">
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
        <div className="grid lg:grid-cols-3 gap-4 py-10">
          {webTemplates.map((template: any) => (
            <div
              key={template.id}
              className="border border-white/20 p-4 rounded-xl"
            >
              <div>
                {template.properties.Title.title.map((item: any) => (
                  <p
                    key={item}
                    className="text-sm uppercase font-bold text-gray-500"
                  >
                    {item.plain_text}
                  </p>
                ))}
              </div>
              <Link
                href={`/digital-products/${template.properties.slug.rich_text[0].plain_text}`}
              >
                <p className="mono">See more</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const webTemplates = process.env.NOTION_DIGITAL_PRODUCTS_DB;
  const response = await notion.databases.query({
    database_id: `${webTemplates}`,
  });

  return {
    props: {
      webTemplates: response.results,
    },
    revalidate: 30,
  };
}
