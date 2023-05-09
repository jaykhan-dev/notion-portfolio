import React from "react";

import { notion } from "../../services/notion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/wallpapers.module.css";
import ContactBlock from "@/components/ContactBlock";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export default function Projects({ projects }: any) {
  if (!projects) return <div>no projects</div>;
  return (
    <section>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Selected projects in graphics and frontend"
        />
      </Head>
      <div className="bg-gradient-to-b from-black/60 via-black to-black py-36">
        <div className="grid lg:grid-cols-3 gap-4 lg:w-2/3 mx-auto lg:p-0 p-4">
          {projects.map((project: any) => {
            return (
              <div
                key={project.id}
                className="border my-2 backdrop-blur-lg border-white/20 rounded-xl hover:border-white/50 duration-300"
              >
                <Image
                  src={project.properties.Image.files[0].external.url}
                  width={500}
                  height={400}
                  alt="img"
                  className="rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-mono my-2">
                    {project.properties.Title.title.map((item: any) => (
                      <span key={item}> {item.plain_text}</span>
                    ))}
                  </h2>
                  <p className="text-sky-400">
                    {project.properties.Summary.rich_text.map((item: any) => (
                      <span key={item}>{item.plain_text}</span>
                    ))}
                  </p>
                  <div className="my-2 flex flex-wrap">
                    {project.properties.Tags.multi_select.map((item: any) => (
                      <span
                        key={item}
                        className="text-sm font-mono p-1 border border-white/20 rounded m-1"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-t border-white/20 mt-4 py-4 px-4">
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
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </a>
                  <button>
                    <Link
                      href={`/projects/${project.properties.slug.rich_text[0].plain_text}`}
                      className="flex items-center uppercase text-purple-500"
                    >
                      read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const databaseId = process.env.NOTION_PROJECTS_DB;
  const response = await notion.databases.query({
    database_id: `${databaseId}`,
  });

  //console.log(response);

  return {
    props: {
      projects: response.results,
    },
    revalidate: 1,
  };
}
