import {Client} from "@notionhq/client";

export default function notionLatest( {latest} ) {
    return (
        <div className="w-full h-64 rounded-lg bg-[#38e8be]">
            {latest.map((last) => (
                <div className="flex flex-col w-full h-24">
                    <a
                        className="px-1 md:px-10 font-bold text-gray-900 dark:text-gray-50 hover:text-[#ffc72e] hover:underline underline-offset-4 decoration-wavy"
                        href={last.link}
                        target="_blank"
                    >
                        {last.title}
                    </a>
                    <p className="py-4 px-1 md:px-10 text-gray-900 dark:text-gray-50">{last.author}</p>
                </div>
            ))}
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