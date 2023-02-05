import { List } from "phosphor-react"
const { Client } = require("@notionhq/client")
import Link from "next/link"
import classnames from "classnames";
import { ArrowIcon } from "lib/icons";

export default function NotionImportApiTest() {
  return (
    <body>
      <Link
        href="/experiments"
        className={classnames(
        "py-1 rounded-lg text-gray-500 dark:text-gray-500 shadow-gray-200/10 flex items-center ml-6 mt-6"
        )}>

        <span className="w-5 h-5 rotate-180">{ArrowIcon}</span>View all experiments
      </Link>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </body>
  )
}


export async function getStaticProps() {
  const { Client } = require("@notionhq/client")
  const notion = new Client({
      auth: "secret_5MpN1A6QNemFuwbbbhXafJQOS1lcjvHGvjMNP99VqPa",
  })

  const response = await notion.databases.query({
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
    }))

    return {
      props: {
        list: response.results,
      },
      revalidate: 60,
    }
  }
