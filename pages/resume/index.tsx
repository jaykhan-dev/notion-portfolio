import React from "react";
import styles from "@/styles/wallpapers.module.css";
import { notion } from "@/services/notion";
import Head from "next/head";
import PageHeader from "@/components/PageHeader";

interface Job {
  id: string;
  title: string;
}

export default function Resume({ resume }: any) {
  if (!resume) return <div>no data</div>;
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Work experience" />
      </Head>
      <PageHeader
        title="Projects"
        image={styles.resumeBg}
        description="Building user interfaces and digital assets for the web primarily. Utilizing AI like Mid-Journey and Github Copilot to increase productivity."
      />
      <div className="lg:w-2/3 mx-auto my-20">
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
    </>
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
    revalidate: 30,
  };
}
