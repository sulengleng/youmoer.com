import Link from "next/link";
import { useRouter } from "next/router";
import clsx from 'clsx'

export default function MusicList({ allPosts, activeSlug }) {
  const {
    query: { slug },
  } = useRouter();
  
  return (
    <div
      className={clsx(
        "md:max-w-[360px] w-full h-screen p-3",
        slug != undefined && "hidden lg:flex flex-col"
      )}
    >
      <div
        className={clsx(
          "bg-gray-50 dark:bg-gray-900 overflow-auto no-scrollbar rounded-lg h-full border border-gray-200/50 dark:border-gray-800/50"
        )}
      >
        <div className="z-50 px-4 py-2 text-sm text-gray-500 border-b border-gray-200/50 dark:border-gray-800 top-0 sticky bg-gray-50 dark:bg-gray-900">
          Music List
        </div>
        {allPosts?.map((post) => (
          <div
            key={post.slug}
            className="border-gray-200/50 dark:border-gray-800/50 p-[5px] border-b"
          >
            <Link href={`/music/${post.slug}`}>
              <article
                className={clsx(
                  "rounded-lg flex items-center text-sm w-full py-[10px] px-3 transition-all duration-150 ease-in-out  dark:text-white",
                  activeSlug == post.slug
                    ? "bg-white text-black dark:bg-gray-800 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                    : "text-gray-800  hover:bg-white dark:hover:bg-gray-800 hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                )}
              >
                {post?.icon ? (
                  <div className="flex relative">
                    <img
                      src={post?.icon}
                      alt={post.title}
                      className="w-14 h-14 rounded-sm -rotate-6 z-10 mr-8"
                    />
                    <div className="rounded-full absolute top-2 left-[32px] bg-black border border-black w-14 h-14 flex">
                      <img src={post?.icon} alt={post.title} className="rounded-full w-6 h-6 mt-4 ml-4"/>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-6 h-6 text-lg font-bold text-white bg-black border border-gray-100 rounded-full dark:border-gray-800">
                    {post?.title?.slice(0, 1)}
                  </div>
                )}
                <h2 className={clsx("font-semibold ml-3 max-w-[220px] md:max-w-[200px]")}>{post.title}</h2>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

