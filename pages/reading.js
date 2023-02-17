import {RoughNotation} from "react-rough-notation";
import { Client } from "@notionhq/client";

export default function Reading ({ reading, latest, lighted }) {
    return (
        <body className="selection:bg-[#ffc72e]">
            <div className="max-w-[90%] md:max-w-[95%] mx-auto mt-4">
                <div className="mx-auto mt-6 md:mt-8 mb-2">
                    <RoughNotation
                        type="highlight"
                        show={true}
                        color="#ffc72e"
                        animationDuration={1500}
                        className="text-3xl font-sans font-bold text-black mx-auto my-6"
                    >
                        阅读文章一览
                    </RoughNotation>
                </div>
                <div className="flex md:flex-row flex-col gap-x-4">
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#38e8be] relative selection:bg-[#5200ff] selection:text-white">
                        <p className="pt-6 pl-4 md:pl-6 text-2xl text-[#5200ff] font-extrabold z-10 font-douyu">本周阅读</p>
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
                        <h1 className="absolute z-0 bottom-16 -right-20 text-9xl font-black font-thunder uppercase text-white transform -rotate-90 mix-blend-overlay">Week</h1>
                    </div>
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#e8b1d2] relative selection:bg-[#3d70fa] selection:text-black">
                        <p className="pt-6 pl-4 md:pl-6 text-2xl text-[#3d70fa] font-extrabold z-10 font-douyu">最多高亮</p>
                        {lighted.map((light) => (
                            <div className="z-0 flex flex-row justify-between">
                                <div className="flex flex-col w-full h-auto max-w-[200px] md:max-w-[250px] z-10">
                                    <a
                                        className="z-20 pl-4 pt-4 md:pl-6 text-lg font-bold text-gray-900 hover:decoration-[#3d70fa] hover:underline underline-offset-4 decoration-wavy"
                                        href={light.link}
                                        target="_blank"
                                    >
                                        {light.title}
                                    </a>
                                    <p className="z-20 pl-4 px-1 md:pl-6 text-gray-900">{light.author}</p>
                                </div>
                                <diV className="z-20 h-6 w-6 rounded-full self-center bg-[#e398c6] mx-6">
                                    <p className="z-30 text-xs font-bold text-[#3d70fa] text-center pt-1">{light.highlights}</p>
                                </diV>
                            </div>
                        ))}
                        <div className="w-full h-6 z-10"></div>
                        <h1 className="absolute z-0 overflow-hidden bottom-64 -right-2 md:-right-64 text-9xl font-black font-thunder uppercase text-white transform -rotate-90 mix-blend-overlay">Highlight</h1>
                    </div>
                    <div className="mt-8 w-full h-auto rounded-lg bg-[#4c02e8] relative selection:bg-[#3cffd0] selection:text-black">
                        <p className="pt-6 pl-4 md:pl-6 text-2xl text-[#3cffd0] font-extrabold z-10 font-douyu">最爱阅读</p>
                        {Favorite.map((items) => (
                            <div className="flex flex-col w-full h-auto max-w-[200px] md:max-w-[250px] z-10">
                                <a
                                    className="z-20 pl-4 pt-4 md:pl-6 text-lg font-bold text-gray-50 hover:decoration-[#3cffd0] hover:underline underline-offset-4 decoration-wavy"
                                    href={items.link}
                                    target="_blank"
                                >
                                    {items.title}
                                </a>
                                <p className="z-20 pl-4 px-1 md:pl-6 text-gray-50">{items.author}</p>
                            </div>
                        ))}
                        <div className="w-full h-6 z-0"></div>
                        <h1 className="absolute z-0 bottom-32 -right-2 text-9xl font-black font-thunder uppercase text-white transform -rotate-90 mix-blend-overlay">Favorite</h1>
                    </div>
                </div>
                <div className="my-8 flex flex-col md:grid md:grid-cols-3 gap-4 min-w-screen border-dashed border-2 border-[#ffc72e] bg-gray-50 dark:bg-black rounded-lg">
                    <p className="pt-4 pl-4 md:pl-6 text-2xl text-[#ffc72e] font-extrabold font-douyu">全部高亮</p>
                    {reading.map((read) => (
                        <div className="flex flex-col w-full h-24">
                            <a
                                className="pl-4 pt-4 md:pl-6 pr-6 text-lg font-bold text-gray-900 dark:text-gray-50 hover:decoration-[#ffc72e] hover:underline underline-offset-4 decoration-wavy"
                                href={read.link}
                                target="_blank"
                            >
                                {read.title}
                            </a>
                            <p className="pl-4 px-1 md:pl-6 text-gray-900 dark:text-gray-50">{read.author}</p>
                        </div>
                    ))}
                </div>
                <div className="py-2 mb-8 mx-auto justify-center text-center text-sm text-gray-500 bg-repeat bg-[url('https://s2.loli.net/2022/12/07/3MBKFxyaXtjNrGh.png')] dark:bg-[url('https://s2.loli.net/2022/12/07/9cv1jB2W6ZOVFfk.png')] dark:text-white">
                    以上记录了我2023年在阅读时 highlight 过的文章，数据通过 Notion Database API 获取。阅读文章的记录由 Readwise Reader 提供。设计风格致敬科技媒体 The Verge。
                </div>
            </div>
        </body>
    )
}

const Favorite = [
    {
        title: "Generative AI 杂记",
        author: "Platform Thinking +",
        link: "https://pt.plus/notes-on-generative-ai/",
    },
    {
        title: "产品沉思录 | 2023 Vol.20230113",
        author: "产品沉思录",
        link: "https://xiaobot.net/p/pmthinking2023",
    },
    {
        title: "Letter #021 社区的演变",
        author: "汗青",
        link: "https://qingchen.zhubai.love/posts/2231819355094728704",
    },
    {
        title: "Shyrism.News #26 文明崛起",
        author: "Shyrz",
        link: "https://shyrz.me/news-26-the-rise-of-civilization/",
    },
    {
        title: "The Cup of Coffee Theory of AI",
        author: "Every",
        link: "https://every.to/p/the-cup-of-coffee-theory-of-ai",
    },
    {
        title: "协议怎么做才能成呢？",
        author: "李奇",
        link: "https://thequibbler.zhubai.love/posts/2233155745766109184",
    },
    {
        title: "",
        author: "乔尔事务所",
        link: "https://yzhu1015.zhubai.love/posts/2213937160535986176",
    },
    {
        title: "重返学校 week 3",
        author: "大憨",
        link: "https://dahan.zhubai.love/posts/2185816026523394048",
    },
    {
        title: "普通人离“平庸之恶”有多远？",
        author: "李厚辰",
        link: "https://mp.weixin.qq.com/s?__biz=MzA3MDM3NjE5NQ==&mid=2650935193&idx=1&sn=5cbd53041e7ee2f17fc62499f9adca73#rd",
    },
]

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
        link: last.properties.URL.url,
    }))

    const lighted = highlightData.results.map(light => ({
        id: light.id,
        title: light.properties.Title.title[0].plain_text,
        author: light.properties.Author.rich_text[0].plain_text,
        highlights: light.properties.Highlights.number,
        link: light.properties.URL.url,
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