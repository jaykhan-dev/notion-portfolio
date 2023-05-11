import React from "react";
import styles from "@/styles/wallpapers.module.css";
import { notion } from "@/services/notion";
import Head from "next/head";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

interface Post {
  id: string;
  title: string;
}

export default function Blog({ posts }: any) {
  if (!posts) return <div>no data</div>;
  return (
    <>
      <Head>
        <title>Jay Khan Blog</title>
        <meta name="description" content="Mid Journey Blog" />
      </Head>
      <PageHeader title="Blog" image={styles.blogBg} />
      <div className="lg:w-2/3 mx-auto my-20 lg:p-0 p-4 grid lg:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="p-4 border border-white/20 rounded-xl my-4"
          >
            <Image
              src={post.properties.image.url}
              width={800}
              height={400}
              alt="blog image"
            />
            <div>
              <h2 className="font-bold lg:text-4xl">
                {post.properties.Title.title.map((item: any) => (
                  <span key={item}>{item.plain_text}</span>
                ))}
              </h2>
              <span className="">{post.properties.Date.date.start}</span>
              {/* <p className="p-2 border border-white/20 rounded-xl my-4 mono">
                {post.properties.prompts.rich_text.map((prompt: any) => (
                  <span key={prompt}>{prompt.plain_text}</span>
                ))}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const databaseId = process.env.NOTION_BLOG_DB;
  const response = await notion.databases.query({
    database_id: `${databaseId}`,
  });

  return {
    props: {
      posts: response.results,
    },
    revalidate: 30,
  };
}
