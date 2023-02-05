import { List } from "phosphor-react"
const { Client } = require("@notionhq/client")
import Link from "next/link"
import classnames from "classnames";
import { ArrowIcon } from "lib/icons";
import {data} from "autoprefixer";

export default function Reading ({ reading }) {
    return (
        <table className="table-auto border-spacing-2 border">
            <thead>
            <tr>
                <th>文章</th>
                <th>作者</th>
                <th>时间</th>
            </tr>
            </thead>
            {reading.map((read) => (
                <tbody>
                    <tr>
                        <td>{read.title}</td>
                        <td>{read.author}</td>
                        <td>2022</td>
                    </tr>
                </tbody>
            ))}
        </table>

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
    }))

    return {
        props: {
            reading,
        },
        revalidate: 60,
    }
}