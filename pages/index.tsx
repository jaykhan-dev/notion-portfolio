import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Client } from "@notionhq/client";

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
    <main className={`grid place-items-center h-screen ${inter.className}`}>
      <Head>
        <title>Jay Khan</title>
        <meta name="description" content="Jay Khan Portfolio" />
      </Head>
      <div>
        <h1>Jay Khan</h1>
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
