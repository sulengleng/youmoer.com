import { List } from "phosphor-react"
const { Client } = require("@notionhq/client")
import Link from "next/link"
import classnames from "classnames";

const LIST = [
  {
    title: "properties.Name.title[0].plain_text",
    url: "properties.URL",
    tags: "properties.Tags",
  },
];

export default function NotionImportApiTest() {
  return (
    <ul className="relative">
      {LIST?.map((item) => (
            <Link
              title={item.properties.Name.title[0].plain_text}
              url={item.properties.URL.url}
              tags={item.properties.Tags.multi_select}
              show={item.properties.Use.checkbox}
            >
              </Link>
          ))}
  </ul>
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
