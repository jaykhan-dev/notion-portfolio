import React from "react";
import { notion } from "../../services/notion";
import Image from "next/image";
import styles from "../../styles/wallpapers.module.css";

interface WebTemplate {
  id: string;
  title: string;
}

export default function DigitalProducts({ webTemplates }: any) {
  if (!webTemplates) return <div>no data!</div>;
  return (
    <section>
      <div className="">
        <div className={`${styles.digitalProducts}`}></div>
        <div className="lg:w-2/3 mx-auto mt-20">
          <div>
            {/* <Image src="../images/" width={50} height={50} alt="" /> */}
            <h1 className="lg:text-4xl font-bold border-b-4 py-4 mb-4 border-white/20">
              Digital Products
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {webTemplates.map((template: any) => (
              <div
                key={template.id}
                className="border border-white/20 p-4 rounded-xl"
              >
                <div>
                  {template.properties.Title.title.map((item: any) => (
                    <p
                      key={item}
                      className="text-sm uppercase font-bold text-gray-500"
                    >
                      series:{" "}
                      <span className="text-purple-500">
                        {" "}
                        {item.plain_text}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const webTemplates = process.env.NOTION_WEB_TEMPLATES_DB;
  const response = await notion.databases.query({
    database_id: `${webTemplates}`,
  });

  return {
    props: {
      webTemplates: response.results,
    },
    revalidate: 1,
  };
}
