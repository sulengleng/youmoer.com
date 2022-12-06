const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: "secret_t2IvXIXBYP9O4fAJ0wHCRChCmW3ADR11Chn9eu99Et7",
})

;(async() => {
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

    console.log(response.results)
})()