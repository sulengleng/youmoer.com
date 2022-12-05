const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: "secret_t2IvXIXBYP9O4fAJ0wHCRChCmW3ADR11Chn9eu99Et7",
})

;(async() => {
    const res = await notion.databases.query({
        datebase_id: "9b5e911262dd4899b8857992f19b3d99",
        view_id: "08102145f0f648fb927d7cf338d13845",
        filter: {
            property: "Name",
            text: {
                contains: "DEX"
            }
        }
    })

    console.log(res)
})()