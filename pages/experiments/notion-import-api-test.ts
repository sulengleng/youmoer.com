const { Client } = require("@notionhq/client")

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
  
    const response = await notion.databases.query({
      database_id: process.env.NOTION_STACK_ID,
      filter: {
        and: [
          {
            property: "Use",
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
