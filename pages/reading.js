import { List } from "phosphor-react"
const { Client } = require("@notionhq/client")
import Link from "next/link"
import classnames from "classnames";
import { ArrowIcon } from "lib/icons";
import {data} from "autoprefixer";

export default function Reading ({ reading }) {
    return (
        <body>
            <div className="max-w-[90%] md:max-w-[75%] mx-auto mt-4">
                <h1 className="text-2xl font-bold my-6">阅读文章高亮一览</h1>
                {reading.map((read) => (
                <div className="mt-1 flex h-12 w-full justify-between rounded-lg bg-gray-200 dark:dark:bg-gray-800/70">
                    <p className="max-w-1/2 ml-4 place-self-center">{read.title}</p>
                    <p className="mr-4 place-self-center">{read.author}</p>
                </div>
                ))}
            </div>
        </body>
    )
}

export async function getStaticProps() {
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
        lastHighlighted: read.properties["Last Highlighted"].date.start,
    }))

    return {
        props: {
            reading,
        },
        revalidate: 60,
    }
}