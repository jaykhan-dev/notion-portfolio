import { getSingleProject } from "@/services/notion";
import React from "react";

export default function ProjectPage({ project }: any) {
  return (
    <section>
      <div className="h-screen grid place-items-center">
        <div>
          <h1>{project.properties.Title.title[0].plain_text}</h1>
          <p>
            {project.properties.Summary.rich_text.map((item: any) => (
              <span key={item}>{item.plain_text}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
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
  const project = await getSingleProject(params.slug);

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
};
