import {RoughNotation} from "react-rough-notation";
const { Client } = require("@notionhq/client")


export default function Reading ({ reading }) {
    return (
        <body>
            <div className="max-w-[90%] md:max-w-[75%] mx-auto mt-4">
                <div className="mx-auto my-6 md:my-8">
                    <RoughNotation
                        type="highlight"
                        show={true}
                        color="#ffc72e"
                        animationDuration={1500}
                        className="text-3xl font-sans font-bold text-black mx-auto my-6"
                    >
                        阅读文章高亮一览
                    </RoughNotation>
                </div>
                <div className="py-2 mx-auto justify-center text-center text-sm text-gray-500 bg-repeat bg-[url('https://s2.loli.net/2022/12/07/3MBKFxyaXtjNrGh.png')] dark:bg-[url('https://s2.loli.net/2022/12/07/9cv1jB2W6ZOVFfk.png')] dark:text-white">
                    以下记录了我所有在阅读时 highlight 过的文章，数据通过 Notion Database API 获取。阅读文章的记录由 Readwise 提供，所有文章在 Readwise Reader上阅读。
                </div>
                {reading.map((read) => (
                <div className="mt-4 flex h-auto w-full justify-between rounded-lg bg-gray-200 dark:bg-gray-800">
                    <RoughNotation
                        type="underline"
                        show={true}
                        color="#ffc72e"
                        animationDuration={1500}
                        className="my-4 ml-4 max-w-[250px] md:max-w-fit place-self-center text-gray-900 dark:text-gray-50"
                        href={read.link}
                        target="_blank"
                    >
                        {read.title}
                    </RoughNotation>
                    <p className="py-4 pr-4 place-self-center text-gray-900 dark:text-gray-50">{read.author}</p>
                </div>
                ))}
            </div>
        </body>
    )
}

export async function getStaticProps() {
    const { Client } = require("@notionhq/client")
    const notion = new Client({
        auth: "secret_ig3DqLAGXUCS9bSiZZXvIDalhynwwQkmLjUS42udYLo",
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
        link: read.properties.URL.url,
    }))

    return {
        props: {
            reading,
        },
        revalidate: 60,
    }
}