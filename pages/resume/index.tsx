import React from "react";
import styles from "@/styles/wallpapers.module.css";
import { notion } from "@/services/notion";

interface Job {
  id: string;
  title: string;
}

export default function Resume({ resume }: any) {
  if (!resume) return <div>no data</div>;
  return (
    <section>
      <div>
        <div className={styles.resumeBg}></div>
        <div>
          {resume.map((job: any) => (
            <div key={job.id}>
              <h2>
                {job.properties.Title.title.map((item: any) => (
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
  const databaseId = process.env.NOTION_RESUME_DB;
  const response = await notion.databases.query({
    database_id: `${databaseId}`,
  });

  return {
    props: {
      resume: response.results,
    },
    revalidate: 1,
  };
}
