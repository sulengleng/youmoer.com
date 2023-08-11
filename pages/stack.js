import Link from "next/link"
import {ArrowUpRight,} from "@phosphor-icons/react";


export default function Stack () {

  const STACK = [
    {
      icon: "https://s2.loli.net/2023/08/06/xSjakCRVAbd6KqD.png",
      tool: "Apple Music",
      description: "音乐软件，曲库齐全、设计简洁，适合苹果用户，Windows 上推荐第三方客户端 Cider。",
      url: "https://music.apple.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/3HpqV8xyCrvbSYz.png",
      tool: "Last.fm",
      description: "老牌音乐记录工具，我所有在 Apple Music 里听的音乐都会自动记录到里面，有助于我掌握自己的听歌偏好。",
      url: "https://last.fm/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/CNuYpZaUwdHBRtQ.png",
      tool: "ChatGPT",
      description: "来自 OpenAI 的人工智能助手，我一般通过 GPT-4 api 配合第三方客户端使用，提升的生产力相信用过的朋友们都有目共睹。",
      url: "https://openai.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/5CAoH4gIEQpTXYJ.png",
      tool: "Gmail",
      description: "目前的主力邮箱客户端，配合 Gmail 前设计师的拓展插件 Simplify 非常好用！",
      url: "https://gmail.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/Cwq9jOknrsaVuh5.png",
      tool: "X",
      description: "我最重要的信息获取来源之一，每天都会浏览一段时间来获取一些即时的信息。",
      url: "https://x.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/PSklsGvOBQaAhbV.png",
      tool: "Discord",
      description: "很多国外产品开发者会选择 Discord 作为用户社群，有时和朋友们打游戏也会用到。",
      url: "https://discord.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/EIlW8ODuJezhM37.png",
      tool: "Figma",
      description: "基本上所有的设计工作都会在上面完成，社区也非常不错，可以参考各种优秀的设计。",
      url: "https://figma.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/aVelBoc1RHPiFYg.png",
      tool: "Typora",
      description: "目前网站所有的博客和项目写作全部放在上面，唯一能让我沉下心来专注写作的软件。",
      url: "https://last.fm/",
    },
    {
      icon: "https://s2.loli.net/2023/08/11/B4WguEJoYZpnSlU.png",
      tool: "Fabric",
      description: "设计不错的书签网站，我目前用它来做网站设计资源和灵感的收集。",
      url: "https://fabric.so/",
    },
    {
      icon: "https://s2.loli.net/2023/08/04/Wd1nsVljUeS5LFc.png",
      tool: "Linear",
      description: "项目管理软件，目前我来用它管理一些长期项目。",
      url: "https://linear.app/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/fVy6aJwFXov2c9b.png",
      tool: "Zotero",
      description: "学术论文、期刊管理工具，阅读论文特别好用，也可以用于管理阅读。",
      url: "https://www.zotero.org/",
    },
    {
      icon: "https://s2.loli.net/2023/08/11/BKo7UYdHAQWMqx8.png",
      tool: "Readwise & Reader",
      description: "我最喜欢的软件之一，readwise 团队出品的阅读器大大提高了我阅读文章的效率。",
      url: "https://www.readwise.io/",
    },
    {
      icon: "https://s2.loli.net/2023/08/04/JiprvZg56W2dDnc.png",
      tool: "Notion",
      description: "我现在主要用做播客后台和非常简单的项目管理，notion 官方的 api 也挺好用的。",
      url: "https://www.notion.so/",
    },
    {
      icon: "https://s2.loli.net/2023/08/11/pMgYFOs1V2qjJL7.png",
      tool: "Cron",
      description: "设计优雅的日历软件，我用来安排每日的详细工作。",
      url: "https://cron.com/",
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
      description: "一部分代码任务用 VS Code 完成也非常方便，有的时候略微有点不跟手，但是依旧是最好的代码编辑器之一。",
      url: "https://code.visualstudio.com/",
    },
    {
      icon: "https://s2.loli.net/2023/08/06/DYS5JeH1gxEBqyW.png",
      tool: "Telegram",
      description: "Telegram 的机器人非常好用，能做链接收藏或者找书的工作，然后也会在 TG 上订阅一些朋友的频道。",
      url: "https://web.telegram.org/",
    },
    {
      icon: "https://s2.loli.net/2023/08/11/PgTJZajt5lcknsD.png",
      tool: "1Password",
      description: "目前用 1Password 来管理所有的密码和密匙。",
      url: "https://1password.com/",
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