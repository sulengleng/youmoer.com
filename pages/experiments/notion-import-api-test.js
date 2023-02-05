import { List } from "phosphor-react"
const { Client } = require("@notionhq/client")
import Link from "next/link"
import classnames from "classnames";
import { ArrowIcon } from "lib/icons";
import {data} from "autoprefixer";

export default function Reading ({ data }) {
  return (
    <div>
      <h1>Notion API Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
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
        data,
      },
      revalidate: 60,
    }
  }
