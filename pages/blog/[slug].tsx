import { getSingleBlog } from "@/services/notion";
import React from "react";

interface BlogPageProps {
  blog: any;
}

export default function BlogPage({ blog }: any) {
  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h1>{blog.properties.Title.title[0].plain_text}</h1>
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
  const blog = await getSingleBlog(params.slug);
  return {
    props: {
      blog,
    },
    revalidate: 60,
  };
};
