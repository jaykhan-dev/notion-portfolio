import React from "react";
import { notion } from "@/services/notion";
import styles from "@/styles/wallpapers.module.css";
import PageHeader from "@/components/PageHeader";
import Head from "next/head";

interface Track {
  id: string;
  title: string;
}

export default function Music({ music }: any) {
  if (!music) return <div>no data!</div>;
  return (
    <>
      <Head>
        <title>Jay Khan Music</title>
        <meta name="description" content="Music made with Ableton and love." />
      </Head>
      <PageHeader title="Music" image={styles.musicBg} />
      <div className="lg:w-2/3 mx-auto my-20">
        <div className="">
          {music.map((track: any) => (
            <div
              key={track.id}
              className="p-4 border border-white/20 rounded-xl my-2 w-full"
            >
              <h2>
                {track.properties.Name.title.map((item: any) => (
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

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_MUSIC_DB;
  const response = await notion.databases.query({
    database_id: `${databaseId}`,
  });

  return {
    props: {
      music: response.results,
    },
    revalidate: 1,
  };
};
