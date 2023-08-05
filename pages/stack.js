import Link from "next/link"
import {ArrowUpRight,} from "@phosphor-icons/react";


export default function Stack () {

  const STACK = [
    {
      icon: "https://s2.loli.net/2023/08/06/EIlW8ODuJezhM37.png",
      tool: "Figma",
      description: "基本上所有的设计工作都会在上面完成，社区也非常不错，可以参考各种优秀的设计。",
      url: "https://figma.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/04/Wd1nsVljUeS5LFc.png",
      tool: "Linear",
      description: "项目管理软件，目前我来用它管理一些长期项目。",
      url: "https://linear.app/",
    },
    {
      icon: "https://s2.loli.net/2023/08/04/JiprvZg56W2dDnc.png",
      tool: "Notion",
      description: "我现在主要用做播客后台和非常简单的项目管理，notion 官方的 api 也挺好用的。",
      url: "https://www.notion.so/",
    },
    {
      icon: "https://s2.loli.net/2023/08/05/q6vYnmxrszXIFKb.png",
      tool: "Obsidian",
      description: "长期维护的第二大脑。卡片笔记法主导，anki记忆法为辅来整理和复习笔记。",
      url: "https://obsidian.md/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/IBLXCqSHYKu4yDl.png",
      tool: "WebStorm",
      description: "写前端主要用的 IDE，有一些功能无可替代。",
      url: "https://www.jetbrains.com/webstorm/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/bQ2z9ek7uiYRBIJ.png",
      tool: "Visual Studio Code",
      description: "一部分代码任务用 VS Code 完成也非常方便，有的时候略微有点不跟手，但是依旧是最好的代码编辑器之一",
      url: "https://code.visualstudio.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/viCVfEpQzUZy6MH.png",
      tool: "哔哩哔哩",
      description: "国内最好的长视频平台，二创、教学、Vlog 视频的创作氛围都非常好。",
      url: "https://www.bilibili.com/",
    },
  ]

  return (
    <body className="">
        <div className="max-w-[85%] md:max-w-[80%] mx-auto py-4">
            <div className="max-w-[620px] mx-auto">
              <div className="font-bold text-3xl mt-8">工具</div>
              <p className="mt-8 text-lg text-gray-600 dark:text-gray-300">一个人使用的工具一定程度上展现了他解决问题的方式，许多人会在他们的个人网站上建立 uses 页面来告诉参观者他们是如何生活和工作的。</p>
              <div className="w-full border-t my-12 dark:border-gray-700"></div>
            </div>
            {STACK.map((stack) => {
              return (
                <diV className="max-w-[670px] mx-auto flex flex-col">
                  <Link href={stack.url} key={stack.url} target="_blank">
                    <div className="w-full flex group lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900 rounded-md">
                      <img src={stack.icon} className="w-16 h-16 my-6 -ml-2 lg:ml-4 mr-4" />
                      <div className="flex flex-col mt-4 ml-2 sm:mt-6 sm:ml-2">
                        <span className="flex">
                          <p className="text-lg font-semibold">{stack.tool}</p>
                          <ArrowUpRight className="w-4 h-4 ml-1 mt-0.5 opacity-0 group-hover:opacity-100 duration-[250ms] ease-in-out" />
                        </span>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300 mr-4 mb-4">{stack.description}</p>
                      </div>
                    </div>
                  </Link>
                </diV>
              );
            })}
            <div className="h-20 w-full"></div>
        </div>
    </body>
  )
}