import {ExternalLinkIcon, AppleIcon} from "lib/icons"
import { motion } from 'framer-motion'

export default function MusicContent({ post }) {
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
      {post?.icon ? (
        <div className="w-12 h-12 mx-auto mb-5">
          <img
            src={post?.icon}
            className="mb-4 border border-gray-100 rounded-full shadow-lg dark:border-gray-600"
          />
        </div>
      ) : (
        ""
      )}
      <h1 className="text-4xl mb-5 font-black md:text-4xl text-center max-w-[620px] mx-auto dark:text-white">
        {post.title}
      </h1>
      {post?.tech ? (
        <div className="flex mb-5 space-x-4 text-xs">
          {post?.tech.map((tech) => (
            <div
              key={tech}
              className="font-mono border border-gray-200 dark:border-gray-800 px-1 py-px rounded-md text-gray-600 dark:text-gray-400 shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-xs"
            >
              {tech}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-center items-center space-x-5 max-w-[620px] w-full mt-5 mb-10">
        {post?.web ? (
          <a
            href={post?.web}
            target="_blank"
            className="flex items-center justify-center w-full px-4 py-1 text-base text-center text-white bg-black rounded-lg shadow-lg dark:bg-white dark:text-black"
          >
            <span className="w-5 h-5 mr-2">{ExternalLinkIcon}</span>
            <span>Web App</span>
          </a>
        ) : (
          ""
        )}
        {post?.ios ? (
          <a
            href={post?.ios}
            target="_blank"
            className="flex items-center justify-center w-full px-4 py-1 text-base text-center text-white bg-black rounded-lg shadow-lg dark:bg-white dark:text-black"
          >
            <span className="w-5 h-5 mr-2">{AppleIcon}</span>
            <span>iOS App</span>
          </a>
        ) : (
          ""
        )}
      </div>
      <div>
        {post?.site ? (
          <iframe 
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
            frameborder="0" 
            height="450" 
            style="width:100%;max-width:660px;overflow:hidden;background:transparent;" 
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
            src={post?.site}>
          </iframe>
        ) : (
          ""
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post?.content }}
        className="inline-block mx-auto post-content"
      />
    </motion.div>
  );
}
