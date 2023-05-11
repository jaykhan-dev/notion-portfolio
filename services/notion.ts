import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getSingleProject = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_PROJECTS_DB}`,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  return response.results[0];
};

export const getSingleBlog = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_BLOG_DB}`,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  return response.results[0];
};

export const getSingleDigitalProduct = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_DIGITAL_PRODUCTS_DB}`,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  return response.results[0];
};
