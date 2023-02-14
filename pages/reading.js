import {RoughNotation} from "react-rough-notation";
const { Client } = require("@notionhq/client")

export default function Reading ({ reading, latest, lighted }) {
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
                <div className="flex md:flex-row flex-col gap-x-4">
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#38e8be] relative selection:bg-[#5200ff]">
                        <p className="pt-6 pl-4 md:pl-6 text-2xl text-[#5200ff] font-extrabold z-10">本周阅读</p>
                        {latest.map((last) => (
                            <div className="flex flex-col w-full h-auto max-w-[200px] md:max-w-[250px] z-10">
                                <a
                                    className="z-20 pl-4 pt-4 md:pl-6 text-lg font-bold text-gray-900 hover:decoration-[#5200ff] hover:underline underline-offset-4 decoration-wavy"
                                    href={last.link}
                                    target="_blank"
                                >
                                    {last.title}
                                </a>
                                <p className="z-20 pl-4 px-1 md:pl-6 text-gray-900 z-10">{last.author}</p>
                            </div>
                        ))}
                        <div className="w-full h-6 z-0"></div>
                        <h1 className="absolute z-0 bottom-32 -right-28 text-8xl font-black uppercase text-white transform -rotate-90 mix-blend-overlay">Week</h1>
                    </div>
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#e8b1d2] relative selection:bg-[#3d70fa]">
                        <p className="pt-6 pl-4 md:pl-6 text-2xl text-[#3d70fa] font-extrabold z-10">最多高亮</p>
                        {lighted.map((light) => (
                            <div className="flex flex-col w-full h-auto max-w-[200px] md:max-w-[250px] z-10">
                                <a
                                    className="z-20 pl-4 pt-4 md:pl-6 text-lg font-bold text-gray-900 hover:decoration-[#3d70fa] hover:underline underline-offset-4 decoration-wavy"
                                    href={light.link}
                                    target="_blank"
                                >
                                    {light.title}
                                </a>
                                <div className="z-10 flex flex-row">
                                    <p className="z-20 pl-4 px-1 md:pl-6 text-gray-900">{light.author}</p>
                                    <diV className="z-20 h-6 w-6 rounded-full self-center bg-[#e398c6] ml-2">
                                        <p className="z-30 text-xs font-bold text-[#3d70fa] text-center pt-1">{light.highlights}</p>
                                    </diV>
                                </div>
                            </div>
                        ))}
                        <div className="w-full h-6 z-10"></div>
                        <h1 className="absolute z-0 overflow-hidden bottom-64 -right-64 text-8xl font-black uppercase text-white transform -rotate-90 mix-blend-overlay">Highlight</h1>
                    </div>
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#4c02e8] relative selection:bg-[#3cffd0]">
                        <p className="pt-6 pl-4 md:pl-6 text-2xl text-[#3cffd0] font-extrabold z-10">最爱阅读</p>
                        {latest.map((last) => (
                            <div className="flex flex-col w-full h-auto max-w-[200px] md:max-w-[250px] z-10">
                                <a
                                    className="z-20 pl-4 pt-4 md:pl-6 text-lg font-bold text-gray-50 hover:decoration-[#3cffd0] hover:underline underline-offset-4 decoration-wavy"
                                    href={last.link}
                                    target="_blank"
                                >
                                    {last.title}
                                </a>
                                <p className="z-20 pl-4 px-1 md:pl-6 text-gray-50">{last.author}</p>
                            </div>
                        ))}
                        <div className="w-full h-6 z-0"></div>
                        <h1 className="absolute z-0 bottom-44 -right-32 text-8xl font-black uppercase text-white transform -rotate-90 mix-blend-overlay">Favour</h1>
                    </div>
                </div>
                <div className="my-8 flex flex-col md:grid md:grid-cols-3 gap-4 min-w-screen bg-[#aa9649] dark:bg-black rounded-lg">
                    <p className="pt-4 pl-4 md:pl-6 text-2xl text-[#ffc72e] font-extrabold">全部高亮</p>
                    {reading.map((read) => (
                        <div className="flex flex-col w-full h-24">
                            <a
                                className="pl-4 pt-4 md:pl-6 pr-4 text-lg font-bold text-gray-900 dark:text-gray-50 hover:decoration-[#ffc72e] hover:underline underline-offset-4 decoration-wavy"
                                href={read.link}
                                target="_blank"
                            >
                                {read.title}
                            </a>
                            <p className="pl-4 px-1 md:pl-6 text-gray-900 dark:text-gray-50">{read.author}</p>
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

    const latestData = await notion.databases.query({
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

    const highlightData = await notion.databases.query({
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
                    property: "Highlights",
                    number: {
                        greater_than: 5,
                    },
                },
            ],
        },
        sorts: [
            {
                property: "Highlights",
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

    const latest = latestData.results.map(last => ({
        id: last.id,
        title: last.properties.Title.title[0].plain_text,
        author: last.properties.Author.rich_text[0].plain_text,
    }))

    const lighted = highlightData.results.map(light => ({
        id: light.id,
        title: light.properties.Title.title[0].plain_text,
        author: light.properties.Author.rich_text[0].plain_text,
        highlights: light.properties.Highlights.number,
    }))

    return {
        props: {
            reading,
            latest,
            lighted,
        },
        revalidate: 60,
    }
}