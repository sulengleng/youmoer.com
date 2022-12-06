import { List } from "phosphor-react"
const { Client } = require("@notionhq/client")
import Link from "next/link"
import classnames from "classnames";
import { ArrowIcon } from "lib/icons";


const LIST = [
  {
    title: "properties.Name.title[0].plain_text",
    url: "properties.URL",
    tags: "properties.Tags",
  },
];

export default function NotionImportApiTest() {
  return (
    <body>
      <Link
        href="/experiments"
        className={classnames(
        "py-1 rounded-lg text-gray-500 dark:text-gray-500 shadow-gray-200/10 flex items-center"
        )}>

        <span className="w-5 h-5 rotate-180">{ArrowIcon}</span>View all experiments
      </Link>
      <ul className="relative">
        {LIST?.map((item) => (
              <Link 
                href={item.url}
              >
                </Link>
            ))}
    </ul>
  </body>
  )
}


export async function getStaticProps() {
  const notion = new Client({
      auth: "secret_t2IvXIXBYP9O4fAJ0wHCRChCmW3ADR11Chn9eu99Et7",
  })

  const response = await notion.databases.query({
      database_id: "9b5e911262dd4899b8857992f19b3d99",
      filter: {
        and: [
          {
            property: "Show",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    })

    return {
      props: {
        list: response.results,
      },
      revalidate: 60,
    }
  }
