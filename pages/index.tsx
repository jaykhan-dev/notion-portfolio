import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Client } from "@notionhq/client";
import Link from "next/link";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const inter = Inter({ subsets: ["latin"] });

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export default function Home({ projects }: any) {
  return (
    <main
      className={`grid place-items-center h-screen relative ${inter.className}`}
    >
      <Head>
        <title>Jay Khan</title>
        <meta name="description" content="Jay Khan Portfolio" />
      </Head>
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="logo lg:text-9xl text-4xl font-black mb-4">
            Jay Khan
          </h1>
          <p className="text-2xl font-bold py-4">
            I build user interfaces and digital assets
          </p>
          <Link href="/digital-products">
            <button className="p-4 px-6 rounded-xl bg-purple-500 uppercase font-bold animate-pulse">
              Start Here
            </button>
          </Link>
        </div>
        <iframe
          width="100%"
          height="100%"
          allowFullScreen
          src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//media.graphassets.com/1if4Tz52T6yRUQ4ohfp0&title=drag%2C%20zoom&autoLoad=true&autoRotate=5"
        ></iframe>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_PROJECTS_DB}`,
  });

  console.log(response);

  return {
    props: {
      projects: response.results,
    },
  };
}
