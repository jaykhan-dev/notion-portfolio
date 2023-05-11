import React from "react";
import { notion } from "@/services/notion";
import styles from "@/styles/wallpapers.module.css";
import PageHeader from "@/components/PageHeader";
import Head from "next/head";
import Image from "next/image";

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
      <div className="lg:w-2/3 mx-auto my-20 grid lg:grid-cols-3 gap-4">
        {music.map((track: any) => (
          <div
            key={track.id}
            className="p-4 border border-white/20 rounded-xl my-2 w-full"
          >
            <Image
              src={track.properties.image.url}
              width={800}
              height={400}
              alt="blog image"
            />
            <h2 className="text-3xl font-bold">
              {track.properties.Name.title.map((item: any) => (
                <span key={item}>{item.plain_text}</span>
              ))}
            </h2>
            <audio src={track.properties.track.url} controls></audio>
          </div>
        ))}
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
    revalidate: 30,
  };
};
