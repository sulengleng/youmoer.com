import Link from "next/link";

export default function Home() {
    return (
        <body className="selection:bg-red-600 selection:text-white bg-white">
            <div className="border-8 border-red-600">
                <h1 className="font-sans text-3xl font-bold	tracking-wide pl-14 py-8">Anyway.Now · 安妮薇看看</h1>
                <div className="px-6 py-2 mx-auto max-w-[90%] justify-center text-center text-sm text-gray-500 bg-repeat bg-[url('https://s2.loli.net/2022/12/07/3MBKFxyaXtjNrGh.png')]">
                    即日起《<a className="font-bold">Anyway.News 安妮薇时报</a>》正式更名为 《<a className="font-bold">Anyway.Now 安妮薇看看</a>》，服务内容不变，特此通知~
                </div>
                <div className="px-6 divide-y divide-dotted divide-gray-300">
                    <div className="py-6 flex flex-row divide-x divide-dotted divide-gray-300">
                    <div className="flex flex-col">
                        <Link href="https://www.geekpark.net/news/293302" className="flex-auto px-10 font-bold hover:text-red-600 hover:underline underline-offset-4">创办 Apple 之后，沃兹尼亚克在做什么？</Link>
                        <a className="px-10 py-6 text-red-600 font-extrabold">15小时前</a>
                    </div>
                    <div className="flex flex-col">
                        <Link href="https://www.bilibili.com/video/BV1524y1k787" className="flex-auto px-10 font-bold hover:text-red-600 hover:underline underline-offset-4">配饭视频: 为什么《星际穿越》的配乐，你一听就想哭？</Link>
                        <a className="px-10 py-6 text-red-600 font-extrabold">4天前</a>
                    </div>
                    <div className="flex flex-col basis-11/12">
                        <Link href="https://music.apple.com/cn/replay" className="flex-auto px-10 font-bold hover:text-red-600 hover:underline underline-offset-4">Apple 这个浓眉大眼的家伙也做年度总结了</Link>
                        <p className="px-10 my-2 flex-auto text-sm text-gray-600">年底各大音乐应用都会总结了过去一年最喜爱的音乐，今年 Spotify 的 Wrapped 早早发出了！不过展示层面不再有什么创意，分享的海报也大同小异了，倒是 Apple 今年也开始做专页了~</p>
                        <a className="px-10 py-6 text-red-600 font-extrabold">4天前</a>
                    </div>
                    </div>
                    <div className="py-6 flex flex-row divide-x divide-dotted divide-gray-300">
                    <div className="flex flex-col basis-10/12">
                        <Link href="https://sspai.com/post/73349" className="flex-auto px-8 font-bold hover:text-red-600 hover:underline underline-offset-4">语言选单设计完全指南</Link>
                        <p className="px-8 my-2 flex-auto text-sm text-gray-600">这篇译文翻译自 Smashing Magazine，具有他们网站典型的风格——基于各种不同案例把一个元素掰开揉碎，仔细地讲，如果你有这种方面的设计需求，可以偷懒减少很多「找竞品」的步骤~</p>
                        <a className="px-8 py-6 text-red-600 font-extrabold">5天前</a>
                    </div>
                    <div className="flex flex-col">
                        <Link href="https://mp.weixin.qq.com/s/YCTpQyNmLJKgZe_bQSfNpw" className="flex-auto px-10 font-bold hover:text-red-600 hover:underline underline-offset-4">民国时期是字体设计的黄金时代：传统与现代融合的最佳范式</Link>
                        <a className="px-10 py-6 text-red-600 font-extrabold">6天前</a>
                    </div>
                    <div className="flex flex-col">
                        <Link href="https://mp.weixin.qq.com/s/0ycxO3qCSZVKTwZwFQ06OQ" className="flex-auto px-10 font-bold hover:text-red-600 hover:underline underline-offset-4">在农村宴席卡车面前，变形金刚也得一边去</Link>
                        <a className="px-10 py-6 text-red-600 font-extrabold">7天前</a>
                    </div>
                    </div>
                    <div className="py-6 flex flex-row divide-x divide-dotted divide-gray-300">
                    <div className="flex flex-col">
                        <Link href="https://www.bilibili.com/video/BV1C8411j7pu" className="flex-auto px-10 font-bold hover:text-red-600 hover:underline underline-offset-4">配饭视频: 德鲁伊的神秘符号？聊聊凯尔特艺术</Link>
                        <a className="px-10 py-6 text-red-600 font-extrabold">1周前</a>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col basis-10/12">
                        <Link href="https://zhuanlan.zhihu.com/p/577643205" className="flex-auto px-8 font-bold hover:text-red-600 hover:underline underline-offset-4">用伦敦地铁的标准绘制深圳与香港的轨道交通线路图</Link>
                        <p className="px-8 my-2 flex-auto text-sm text-gray-600">这应该是我见过的最专业的一份「民间」设计里，不只是简简单单用伦敦地铁的线路图风格重绘，而是从历史沿革、实际问题、现场环境等各个方面着手，做了一次严谨、真实的设计需求，值得一看~</p>
                        <a className="px-8 py-6 text-red-600 font-extrabold">1周前</a>
                        </div>
                        <img src="https://s.anw.red/news/hk-sz-map-in-tfl-style.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true" className="rounded-sm h-32"/>
                    </div>
                    </div>
                    <div className="py-6 flex flex-row divide-x divide-dotted divide-gray-300">
                    <div className="flex flex-row">
                        <div className="flex flex-col basis-10/12">
                        <Link href="https://geoffboeing.com/2019/09/urban-street-network-orientation/" className="flex-auto px-8 font-bold hover:text-red-600 hover:underline underline-offset-4">各大城市的道路「规律性」可视化数据展示</Link>
                        <p className="px-8 my-2 flex-auto text-sm text-gray-600">今天才看到这篇老文，研究本身甚至是来自 2019 年的，但让我挺长见识，学者 Geoff Boeing 用工具提取了各个城市的道路方向性然后做了可视化的汇总，北京毫无疑问是横平竖直，而数据告诉我上海其实也不像印象中那么「歪歪扭扭」~</p>
                        <a className="px-8 py-6 text-red-600 font-extrabold">2周前</a>
                        </div>
                        <img src="https://s.anw.red/news/1669101369.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true" className="rounded-sm h-32"/>
                    </div>
                    <div className="flex flex-col">
                        <Link href="https://www.learnui.design/blog/ios-design-guidelines-templates.html" className="flex-auto px-10 font-bold hover:text-red-600 hover:underline underline-offset-4">iOS 16 设计规范细节的插图解读</Link>
                        <a className="px-10 py-6 text-red-600 font-extrabold">2周前</a>
                    </div>
                    </div>
                </div>
            </div>
        </body>
    )
}