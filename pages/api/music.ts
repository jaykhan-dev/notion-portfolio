const { Client } = require("@notionhq/client");
import { notion } from "@/services/notion";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_MUSIC_DB}`,
  });
  res.status(200).json(response);
};
