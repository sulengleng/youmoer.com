import {Client} from "@notionhq/client";
import Link from "next/link";

export default function readingList ({ reading }) {
    return (
        <div>
            <h1>Reading List</h1>
            <pre>{JSON.stringify(reading, null, 2)}</pre>
        </div>
    )
}

export async function getReadingList () {
    const { Client } = require("@notionhq/client")
    const notion = new Client({
        auth: process.env.NOTION_SECRET_KEY,
    })

    const data = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            and: [
                {
                    property: "Category",
                    select: {
                        equals: "Articles",
                    },
                },
            ],
        },
        sorts: [
            {
                property: "Last Highlighted",
                direction: "descending",
            },
        ],
    })

    const reading = data.results.map(read => ({
        id: read.id,
        title: read.properties.Title.title[0].plain_text,
        author: read.properties.Author.rich_text[0].plain_text,
    }))

    return {
        props: {
            reading
        },
        revalidate: 60,
    }
}
