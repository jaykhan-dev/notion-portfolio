import React from "react";
import styles from "@/styles/wallpapers.module.css";
import { notion } from "@/services/notion";

interface Post {
  id: string;
  title: string;
}

export default function Blog({ posts }: any) {
  if (!posts) return <div>no data</div>;
  return (
    <section>
      <div className="">
        <div className={styles.blogBg}></div>
        <div className="">
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
      </div>
    </section>
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
