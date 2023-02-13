import {RoughNotation} from "react-rough-notation";
const { Client } = require("@notionhq/client")

export default function Reading ({ reading, latest }) {
    return (
        <body className="selection:bg-[#ffc72e]">
            <div className="max-w-[90%] max-w-[80%] mx-auto mt-4">
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
                    以下记录了我所有在阅读时 highlight 过的文章，数据通过 Notion Database API 获取。阅读文章的记录由 Readwise Reade 提供。
                </div>
                <div className="flex flex-row gap-x-4">
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#38e8be]">
                        {latest.map((last) => (
                            <div className="flex flex-col w-full h-auto max-w-[250px]">
                                <a
                                    className="px-1 pt-4 md:pl-6 text-lg font-bold text-gray-900 hover:decoration-[#ffc72e] hover:underline underline-offset-4 decoration-wavy"
                                    href={last.link}
                                    target="_blank"
                                >
                                    {last.title}
                                </a>
                                <p className="py-1 px-1 md:pl-6 text-gray-900">{last.author}</p>
                            </div>
                        ))}
                        <div className="w-full h-10"></div>
                    </div>
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#e8b1d2]">
                        {latest.map((last) => (
                            <div className="flex flex-col w-full h-auto max-w-[250px]">
                                <a
                                    className="px-1 pt-4 md:pl-6 text-lg font-bold text-gray-900 hover:decoration-[#ffc72e] hover:underline underline-offset-4 decoration-wavy"
                                    href={last.link}
                                    target="_blank"
                                >
                                    {last.title}
                                </a>
                                <p className="py-1 px-1 md:pl-6 text-gray-900">{last.author}</p>
                            </div>
                        ))}
                        <div className="w-full h-10"></div>
                    </div>
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#4c02e8]">
                        {latest.map((last) => (
                            <div className="flex flex-col w-full h-auto max-w-[250px]">
                                <a
                                    className="px-1 pt-4 md:pl-6 text-lg font-bold text-gray-50 hover:decoration-[#ffc72e] hover:underline underline-offset-4 decoration-wavy"
                                    href={last.link}
                                    target="_blank"
                                >
                                    {last.title}
                                </a>
                                <p className="py-1 px-1 md:pl-6 text-gray-50">{last.author}</p>
                            </div>
                        ))}
                        <div className="w-full h-10"></div>
                    </div>
                </div>
                <div className="my-8 md:divide-x divide-dotted divide-gray-300 flex flex-col md:grid md:grid-cols-3 gap-4 min-w-screen">
                    {reading.map((read) => (
                        <div className="flex flex-col w-full h-24">
                            <a
                                className="px-1 md:px-10 font-bold text-gray-900 dark:text-gray-50 hover:decoration-[#ffc72e] hover:underline underline-offset-4 decoration-wavy"
                                href={read.link}
                                target="_blank"
                            >
                                {read.title}
                            </a>
                            <p className="py-4 px-1 md:px-10 text-gray-900 dark:text-gray-50">{read.author}</p>
                        </div>
                    ))}
                </div>
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

    const lateestdata = await notion.databases.query({
        database_id: "08204d7869154037bd52912de7a6f10d",
        filter: {
            and: [
                {
                    property: "Category",
                    select: {
                        equals: "Articles",
                    },
                },
                {
                    property: "Last Highlighted",
                    date: {
                        this_week: {},
                    },
                }
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

    const latest = lateestdata.results.map(last => ({
        id: last.id,
        title: last.properties.Title.title[0].plain_text,
        author: last.properties.Author.rich_text[0].plain_text,
    }))

    return {
        props: {
            reading,
            latest,
        },
        revalidate: 60,
    }
}