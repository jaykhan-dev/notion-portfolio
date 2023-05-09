import React from "react";
import { Client } from "@notionhq/client";
import { notion } from "../api/notion";
import Head from "next/head";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export default function Projects({ projects }: any) {
  return (
    <section>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Selected projects in graphics and frontend"
        />
      </Head>
      <div>
        <div className="grid lg:grid-cols-3 gap-4 lg:w-2/3 mx-auto mt-20 lg:p-0 p-4">
          {projects.map((project: any) => {
            return (
              <div
                key={project.id}
                className="border my-2 p-4 border-white/20 rounded-xl hover:border-white/50 duration-300"
              >
                <Image
                  src={project.properties.Image.files[0].external.url}
                  width={400}
                  height={400}
                  alt="img"
                />
                <h2 className="text-2xl font-mono my-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
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
