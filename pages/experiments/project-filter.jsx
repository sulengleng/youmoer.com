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
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ContentWrapper className="gap-10 columns-1 space-y-6 pt-6 md:columns-3">
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
