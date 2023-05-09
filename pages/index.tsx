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
      <div className="grid lg:grid-cols-3 gap-4 lg:w-2/3 mx-auto">
        {projects.map((project: any) => {
          return (
            <div
              key={project.id}
              className="border my-2 p-4 border-white/20 rounded-xl"
            >
              <h2 className="text-2xl font-mono">
                {project.properties.Title.title.map((item: any) => (
                  <span key={item}> {item.plain_text}</span>
                ))}
              </h2>
              <p className="text-sky-400">
                {project.properties.Summary.rich_text.map((item: any) => (
                  <span key={item}>{item.plain_text}</span>
                ))}
              </p>
              <a
                rel="noopener"
                target="_black"
                href={project.properties.URL.url}
                className="text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </a>
            </div>
          );
        })}
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
