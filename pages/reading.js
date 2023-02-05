import { List } from "phosphor-react"
const { Client } = require("@notionhq/client")
import Link from "next/link"
import classnames from "classnames";
import { ArrowIcon } from "lib/icons";
import {data} from "autoprefixer";

export default function Reading ({ reading }) {
    return (
        <body>
            <div className="max-w-[90%] md:max-w-[75%] mx-auto mt-8">
                <h1 className="text-xl font-bold">阅读文章高亮一览</h1>
                <table className="table-auto mt-4">
                    <thead>
                    <tr>
                        <th className="text-left">文章</th>
                        <th className="text-left">作者</th>
                    </tr>
                    </thead>
                    {reading.map((read) => (
                        <tbody>
                            <tr>
                                <td>{read.title}</td>
                                <td>{read.author}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
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