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
        title="Resume"
        image={styles.resumeBg}
        description="Building user interfaces and digital assets for the web primarily. Utilizing AI like Mid-Journey and Github Copilot to increase productivity."
      />
      <div className="lg:w-2/3 mx-auto my-20 lg:flex lg:space-x-4">
        <div className="lg:w-1/3">
          <div className="border border-white/20 rounded-xl p-4">
            <h2>Skills</h2>
          </div>
          <div className="border border-white/20 rounded-xl p-4 my-2">
            <h2>Languages</h2>
          </div>
          <div className="border border-white/20 rounded-xl p-4 my-2">
            <h2>Education</h2>
          </div>
        </div>
        <div className="lg:w-2/3 border border-white/20 rounded-xl p-2">
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
