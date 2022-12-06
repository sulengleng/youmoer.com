const { Client } = require("@notionhq/client")

export default function NotionImportApiTest({ list }) {
  return (
    <ul className="">
      <p>asdihowad</p>
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
