import React from "react";
import styles from "@/styles/wallpapers.module.css";
import { notion } from "@/services/notion";
import Head from "next/head";
import PageHeader from "@/components/PageHeader";

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
      <div className="lg:w-2/3 mx-auto my-20">
        {posts.map((post: any) => (
          <div key={post.id}>
            <h2>
              {post.properties.Title.title.map((item: any) => (
                <span key={item}>{item.plain_text}</span>
              ))}
            </h2>
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
    revalidate: 1,
  };
}
