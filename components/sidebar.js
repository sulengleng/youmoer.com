import {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MusicNotes,
  Newspaper,
  IdentificationCard,
  House,
  Note,
  BracketsCurly,
  Flask,
  Compass,
  ArrowSquareOut,
  GithubLogo,
  Books,
} from "phosphor-react";
import clsx from 'clsx'
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Sidebar() {
  const { pathname } = useRouter();
  const [mobileNav, showMobileNav] = useState(false);
  const {theme, setTheme} = useTheme();

  const LINKS = [
    {
      title: "主页",
      url: "/",
      icon: <House size={16} />,
      active: pathname === "/",
    },
    {
      title: "博客",
      url: "/blog",
      icon: <Note size={16} />,
      active: pathname.includes("/blog"),
    },
    {
      title: "项目",
      url: "/projects",
      icon: <BracketsCurly size={16} />,
      active: pathname.includes("/projects"),
    },
    {
      title: "阅读",
      url: "/reading",
      icon: <Books size={16} />,
      active: pathname.includes("/reading"),
    },
    {
      title: "唱片库",
      url: "/music",
      icon: <MusicNotes size={16} />,
      active: pathname.includes("/music"),
    },
    {
      title: "实验室",
      url: "/experiments",
      icon: <Flask size={16} />,
      active: pathname.includes("/experiments"),
    },
    {
      title: "旅行车",
      url: "/map",
      icon: <Compass size={16} />,
      active: pathname === "/map",
    },
    {
      title: "Newsletter",
      url: "https://yeyouchuan.zhubai.love",
      icon: <Newspaper size={16} />,
      active: false,
      external: true,
    },
    {
      title: "简历",
      url: "https://qiyue.read.cv",
      icon: <IdentificationCard size={16} />,
      active: false,
      external: true,
    },
  ];

  const SOCIAL = [
    {
      title: "Github",
      url: `https://github.com/yeyouchuan`,
      icon: <GithubLogo size={16} />,
      external: true,
    },
  ];

  const RenderLinks = ({ sectionTitle, sectionItems }) => {
    return (
      <div className='mb-2 z-100'>
        {sectionTitle ? (
          <h4 className="px-4 mt-4 mb-2 text-gray-500">{sectionTitle}</h4>
        ) : (
          ""
        )}
        <div>
          {sectionItems.map((link) => (
            <div className="px-2" key={link.title}>
              <Link
                href={link.url}
                target={link.external ? "_blank" : ""}
                className={clsx(
                  "flex items-center w-full py-[6px] px-3 mb-1 transition-all duration-150 ease-in-out rounded-lg",
                  link?.active
                    ? "bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.12)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)] font-semibold dark:bg-gray-800 dark:text-white"
                    : "text-gray-800 dark:text-gray-400 hover:bg-white hover:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] dark:hover:shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.7),inset_3px_3px_5px_rgba(255,255,255,0.1)] dark:hover:bg-gray-800"
                )}
              >
                <span className="min-w-[24px] mr-[2px] opacity-80">{link?.icon}</span>
                <span>{link?.title}</span>
                {link?.external ? (
                  <span className="ml-auto text-gray-400 dark:text-gray-600">
                    <ArrowSquareOut size={14} />
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const renderPrefs = () => {
    return (
      <div className="z-100">
        <h4 className="px-4 mt-4 mb-2 text-gray-500">Theme</h4>
        <div className="mx-4 bg-white dark:bg-[#111] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-800 hover:border-gray-800 dark:hover:border-gray-300">
          <select
            onChange={(e) => setTheme(e.target.value)}
            className="w-full bg-white dark:bg-[#111] outline-none appearance-none cursor-pointer py-1 px-2 rounded-lg"
            defaultValue={theme}
            placeholder="Select theme"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0, transition: { duration: .35 }}}
        className="z-100 h-screen sticky top-0 overflow-auto bg-gray-100 dark:bg-gray-900 pt-6 pb-10 md:flex flex-col flex-none hidden text-sm w-full max-w-[220px] px-1 border-r border-gray-200/50 dark:border-gray-800/50"
      >
        <RenderLinks sectionItems={LINKS} />
        <RenderLinks sectionItems={SOCIAL} sectionTitle="Elsewhere" />
        {renderPrefs()}
      </motion.aside>
      <div
        className="z-100 py-3 cursor-pointer text-sm fixed bottom-0 left-0 w-full md:hidden bg-white/60 dark:bg-black/50 dark:border-gray-800 backdrop-blur text-center border-t border-gray-200 flex items-center justify-center shadow-lg"
        onClick={() => showMobileNav(!mobileNav)}
      >
        {!mobileNav ? "目录" : "Close"}
      </div>
      {mobileNav ? (
        <nav className="z-100 fixed bottom-0 left-0 block w-full p-2 md:hidden h-full">
          {mobileNav ? (
            <div
              className="absolute inset-0 bg-black/20 dark:bg-black/50 w-full h-full"
              onClick={() => showMobileNav(false)}
            />
          ) : (
            ""
          )}
          <div className="border border-b-0 border-gray-200 bg-white/70 backdrop-filter backdrop-blur dark:bg-gray-900/90 dark:border-gray-700 bottom-0 absolute left-0 w-full py-6 rounded-t-lg text-sm">
            {mobileNav ? (
              <div>
                <div onClick={() => showMobileNav(false)}>
                  <RenderLinks sectionItems={LINKS} />
                  <RenderLinks sectionItems={SOCIAL} sectionTitle="Social" />
                </div>
                {renderPrefs()}
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}