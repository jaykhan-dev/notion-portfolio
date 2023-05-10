import React from "react";
import { notion } from "@/services/notion";
import styles from "@/styles/wallpapers.module.css";

interface Track {
  id: string;
  title: string;
}

export default function Music({ music }: any) {
  if (!music) return <div>no data!</div>;
  return (
    <section>
      <div className="grid place-items-center">
        <div className={styles.musicBg}></div>
        <div className="lg:w-2/3 mx-auto py-20">
          <h1 className="lg:text-6xl font-bold">Music</h1>
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
      </div>
    </section>
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
