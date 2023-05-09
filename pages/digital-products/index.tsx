import React from "react";
import { notion } from "../../services/notion";

interface WebTemplate {
  id: string;
  title: string;
}

export default function DigitalProducts({ webTemplates }: any) {
  if (!webTemplates) return <div>no data!</div>;
  return (
    <section>
      <div className="h-screen grid place-items-center">
        <div>
          <h1 className="lg:text-4xl font-bold">Digital Products</h1>
          <div>
            {webTemplates.map((template: any) => (
              <div key={template.id}>
                <h2>
                  {template.properties.Title.title.map((item: any) => (
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
