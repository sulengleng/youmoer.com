import { Client } from "@notionhq/client";

export default function notionLatest ({latest})  {
    return (
        <div className="w-full h-64 rounded-lg bg-[#38e8be]">

        </div>
    )
}

export async function getRecentHighlight() {
    const { Client } = require("@notionhq/client")
    const notion = new Client({
        auth: "secret_ig3DqLAGXUCS9bSiZZXvIDalhynwwQkmLjUS42udYLo",
    })

    const data = await notion.databases.query({
        database_id: "08204d7869154037bd52912de7a6f10d",
        filter: {
            and: [
                {
                    property: "Category",
                    select: {
                        equals: "Articles",
                    },
                },
                {
                    property: "Last Highlighted",
                    date: {
                        this_week: {},
                    },
                }
            ],
        },
        sorts: [
            {
                property: "Last Highlighted",
                direction: "descending",
            },
        ],
    })

    const latest = data.results.map(last => ({
        id: last.id,
        title: last.properties.Title.title[0].plain_text,
        author: last.properties.Author.rich_text[0].plain_text,
        link: last.properties.Link.url,
    }))

    return {
        props: {
            latest,
        },
        revalidate: 60,
    }
}