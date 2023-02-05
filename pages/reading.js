import {Client} from "@notionhq/client";
import Link from "next/link";

export default function Reading ({ reading }) {
    return (
        <div>
            <h1>Reading List</h1>
            <ul>
                {reading.map((read) => (
                    <li key={read.id}>
                        <Link href={`/reading/${read.id}`}>
                            <a>{read.title}</a> - {read.author}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getReadingList () {
    const { Client } = require("@notionhq/client")
    const notion = new Client({
        auth: "secret_5MpN1A6QNemFuwbbbhXafJQOS1lcjvHGvjMNP99VqPa",
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
            reading,
        },
        revalidate: 60,
    }
}
