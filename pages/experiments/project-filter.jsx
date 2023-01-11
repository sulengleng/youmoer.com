import { useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from "clsx";
import {Compass} from "phosphor-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ContentWrapper = ({ children, className, width }) => (
    <div
        style={{ maxWidth: `${width || '100%'}`}}
        className={clsx(
            "w-full px-5 mx-auto relative",
            className
        )}
    >
        {children}
    </div>
);

export default function Project() {
    let [categories] = useState({
        AFK: [
            {
                src: "https://s2.loli.net/2022/12/28/sWV5Pf74vtypSzN.png",
                note: "娑丽丝",
                label: "AFK IP部平面设计",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s2.loli.net/2022/12/29/iex3dqLDu9AV7Bp.png",
                note: "猎魔人",
                label: "AFK IP部平面设计",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s2.loli.net/2022/12/29/VCNMmU6iwakX8GK.png",
                note: "艾伦",
                label: "AFK IP部平面设计",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s2.loli.net/2022/12/29/xkvlWczm78VbNR9.png",
                note: "塔尼",
                label: "AFK IP部平面设计",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s2.loli.net/2022/12/29/cp8e5sna9IuMHAh.png",
                note: "幻海奇航",
                label: "AFK IP部平面设计",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s2.loli.net/2022/12/29/hgX92DjOIvFbZQn.png",
                note: "艾伦",
                label: "AFK IP部平面设计",
                className: "rotate-[0deg]",
            },
        ],
        曲名Redesign: [
            {
                src: "https://s2.loli.net/2022/12/28/YWM7rcb3NH6AZgh.png",
                note: "夏疾风",
                label: "曲名Redesign",
                className: "rotate-[0deg]",
            },
        ],
        以闪亮之名: [
            {
                src: "https://s2.loli.net/2022/12/28/BQ7s5l9Joi24tdx.png",
                note: "Have a Date with Romance",
                label: "以闪亮之名 发行平面设计",
                className: "rotate-[0deg]",
            },
        ],
        作字夏フェス2022: [
            {
                src: "https://s2.loli.net/2022/12/28/RDwFAjn8yKd3lpJ.png",
                note: "灯火",
                label: "作字夏フェス2022",
                className: "rotate-[0deg]",
            },
        ],
        綾井海荷: [
            {
                src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/afbece75-73f1-4395-8a2e-2eabbb202d64/%E4%B8%89%E8%A8%80yyy-%E6%88%B4%E7%9C%BC%E9%95%9C-%E6%B0%B4%E5%8D%B0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221229T132854Z&X-Amz-Expires=86400&X-Amz-Signature=c4d3f9f33b0da4ee9d63bcf0bfffd1f96ce13e3f6f394cb24c61690e4c567fd4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E4%25B8%2589%25E8%25A8%2580yyy-%25E6%2588%25B4%25E7%259C%25BC%25E9%2595%259C-%25E6%25B0%25B4%25E5%258D%25B0.png%22&x-id=GetObject",
                note: "@三言yyy",
                label: "綾井海荷（OC）",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cb512aa3-8cde-47a1-8594-3bc34fd2d57c/%E5%85%AC%E5%BC%8F%E4%B9%A6VOL.1-%E7%BA%A6%E7%A8%BF%E5%8D%A1%E7%89%88%E6%9C%AC1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221229T132900Z&X-Amz-Expires=86400&X-Amz-Signature=08245ccf09f6972cdb1927766db0c9721b56311a7d38634a830cedd1072573e2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E5%2585%25AC%25E5%25BC%258F%25E4%25B9%25A6VOL.1-%25E7%25BA%25A6%25E7%25A8%25BF%25E5%258D%25A1%25E7%2589%2588%25E6%259C%25AC1.png%22&x-id=GetObject",
                note: "@差异君",
                label: "綾井海荷（OC）",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f97d122-f11a-41ee-bfeb-37f4bc1b90ff/dke-%E9%BB%91%E7%99%BD%E5%A4%B4%E5%83%8F-%E6%B0%B4%E5%8D%B0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221229T132911Z&X-Amz-Expires=86400&X-Amz-Signature=0e11f42e9f632dbb146d81652b62c1e72e4575d98c7369789cf3d86cd3e05155&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22dke-%25E9%25BB%2591%25E7%2599%25BD%25E5%25A4%25B4%25E5%2583%258F-%25E6%25B0%25B4%25E5%258D%25B0.png%22&x-id=GetObject",
                note: "@dke",
                label: "綾井海荷（OC）",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fd7c6371-d16d-4a33-b5fe-5ec51add080e/%E7%B4%AB%E8%8D%86%E9%A6%99%E6%9C%A8-%E9%BB%91%E7%99%BD%E5%A4%B4%E5%83%8F-%E6%B0%B4%E5%8D%B0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221229T132918Z&X-Amz-Expires=86400&X-Amz-Signature=b0905b2f711e047ad4b122b85f67a6603527bd215273bf64c8e38ac1b4b1dc88&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E7%25B4%25AB%25E8%258D%2586%25E9%25A6%2599%25E6%259C%25A8-%25E9%25BB%2591%25E7%2599%25BD%25E5%25A4%25B4%25E5%2583%258F-%25E6%25B0%25B4%25E5%258D%25B0.png%22&x-id=GetObject",
                note: "@紫荆香木",
                label: "綾井海荷（OC）",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3282c961-cd04-42e4-a384-68c2c487ac50/%E6%98%A5%E5%BD%A9-%E9%BB%91%E7%99%BD%E5%8D%8A%E8%BA%AB-%E7%9C%BC%E9%95%9C%E5%B7%AE%E5%88%86-%E5%8E%9F%E6%B0%B4%E5%8D%B0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221229T132922Z&X-Amz-Expires=86400&X-Amz-Signature=06b444784e8f17910376ac38254c2a790b83774c0622fd4af6dbdcc98cc26839&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E6%2598%25A5%25E5%25BD%25A9-%25E9%25BB%2591%25E7%2599%25BD%25E5%258D%258A%25E8%25BA%25AB-%25E7%259C%25BC%25E9%2595%259C%25E5%25B7%25AE%25E5%2588%2586-%25E5%258E%259F%25E6%25B0%25B4%25E5%258D%25B0.png%22&x-id=GetObject",
                note: "@やまひろ",
                label: "綾井海荷（OC）",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/27ddfb8d-b0f0-4467-afcf-6885c7e91c87/%E3%82%84%E3%81%A9%E3%81%91%E3%82%8D-%E5%9B%9B%E5%AD%A3%E7%A7%81%E6%9C%8D.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221229T132929Z&X-Amz-Expires=86400&X-Amz-Signature=69698c1dcb2bd045359ed101b09d03db06ca8e3a4e035066fc6d12ff2cea6d62&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E3%2582%2584%25E3%2581%25A9%25E3%2581%2591%25E3%2582%258D-%25E5%259B%259B%25E5%25AD%25A3%25E7%25A7%2581%25E6%259C%258D.jpg%22&x-id=GetObject",
                note: "@やまひろ",
                label: "綾井海荷（OC）",
                className: "rotate-[0deg]",
            },
            {
                src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04775bf3-3dc5-43d3-977f-4efb81655153/q%E7%89%88%E6%9C%8D%E8%AE%BE-%E5%86%BB%E4%BA%BA-%E6%B0%B4%E5%8D%B0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221229T132934Z&X-Amz-Expires=86400&X-Amz-Signature=8ad52e76ee1462c536dba95b787508c48d91d7f4620d51e04a131a7b7eee0121&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22q%25E7%2589%2588%25E6%259C%258D%25E8%25AE%25BE-%25E5%2586%25BB%25E4%25BA%25BA-%25E6%25B0%25B4%25E5%258D%25B0.jpg%22&x-id=GetObject",
                note: "@冻人",
                label: "綾井海荷（OC）",
                className: "rotate-[0deg]",
            },
        ]
    })

    return (
        <div className="w-full max-w-md px-2 py-16 pt-6 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-gray-700 shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <span
                    className="absolute left-0 -z-10 h-full w-1/5 origin-center scale-x-110 scale-y-125 rounded-full bg-gray-100 transition-all duration-300 peer-focus/about:left-[20%] peer-focus/services:left-[40%] peer-focus/blog:left-[60%] peer-focus/contact:left-[80%]"></span>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ContentWrapper className="gap-6 columns-1 space-y-6 pt-6 md:columns-3">
                                {posts.map((item) => (
                                    <div
                                        key={item.src}
                                        className={clsx(
                                            item?.className,
                                            "relative border p-[4px] shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] dark:border-gray-700 drop-shadow-xl"
                                        )}
                                    >
                                        <img
                                            src={item?.src}
                                            alt={item?.note}
                                            className="rounded-[9px] w-full"
                                            loading="lazy"
                                        />
                                        <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white bg-opacity-25 hover:bg-opacity-60 bg-clip-padding backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                                            <Compass size={14} className="mr-1" />
                                            {item?.note}
                                        </div>
                                    </div>
                                ))}
                            </ContentWrapper>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}