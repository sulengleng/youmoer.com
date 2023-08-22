import {ExternalLinkIcon} from "lib/icons"
import { motion } from 'framer-motion'
import { ReactCusdis } from 'react-cusdis'

export default function PostContent({ post, slug }) {
  return (
    <motion.div
      key={post.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.25 },
      }}
      className="inline-flex flex-col items-center justify-start w-full h-screen px-5 md:px-10 pt-10 pb-32 overflow-y-auto"
    >
      {post?.link && post?.image ? (
        <div className="max-w-[620px] mx-auto">
          <img src={post.image} className="mb-4 rounded-lg" />
        </div>
      ) : (
        ""
      )}
      <div className="text-center text-gray-400 dark:text-gray-600 text-sm">
        {new Date(post?.date.slice(0, 10)).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <h1 className="text-3xl mb-10 font-black md:text-4xl text-center max-w-[620px] mx-auto dark:text-white">
        {post.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: post?.content }}
        className="inline-block mx-auto post-content"
      />
      {post?.link ? (
        <a
          href={post?.link}
          target="_blank"
          className="w-full py-1 bg-black rounded-lg shadow-lg max-w-[620px] text-white text-lg text-center flex items-center justify-center dark:bg-white dark:text-black"
        >
          <span className="w-5 h-5 mr-2">{ExternalLinkIcon}</span>
          <span>Visit Link</span>
        </a>
      ) : (
        ""
      )}
      <div className="w-full max-w-[705px] dark:bg-[#111111]">
        <ReactCusdis
          lang="zh-cn"
          attrs={{
            host: 'https://cusdis.com',
            appId: '5d04858e-b827-4954-8481-688d0d892101',
            pageId: {slug},
            pageTitle: '{post.title}',
            pageUrl: '{post.link}',
            theme: 'auto',
          }}
        />
      </div>
    </motion.div>
  );
}