import YouTube, { YouTubeProps } from "react-youtube"
import { useRef, useState } from "react"
import { Play, Pause } from "phosphor-react"
import { motion } from "framer-motion"

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const player = useRef();

    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        player.current = event.target
    }

    const opts: YouTubeProps["opts"] = {
        height: "0",
        width: "0",
    }

    function togglePlaying() {
        setIsPlaying((isPlaying) => {
            if (isPlaying) {
                player.current.pauseVideo()
            } else {
                player.current.playVideo()
            }

            return !isPlaying
        })
    }

    return (
        <div className="player mt-6 select-none">
            <div className="mx-auto max-w-[80%] overflow-hidden rounded-xl bg-gradient-to-r from-black via-[#083517] to-[#065321] shadow-md md:max-w-sm">
                <div className="flex">
                    <div className="items-center">
                        <a className="text-white"></a>
                    </div>
                    <div className="relative md:place-items-center">
                        <motion.div
                            onClick={togglePlaying}
                            whileTap={{ scale: 0.8 }}
                            className:"w-24 h-24 flex items-center border-[100px] justify-center bg-white cursor-pointer shadow-md"
                        >
                            <div className="flex items-center border-0 bg-none appearance-none absolute cursor-pointer">
                                {!isPlaying && <Play weight="fill" />}
                                {isPlaying && <Pause weight="fill" />}
                            </div>
                        </motion.div>
                        <div className="hidden absolute">
                            <YouTube
                                videoId={props.youtubeId}
                                opts={opts}
                                onReady={onPlayerReady}
                            />
                        </div>
                        <img className="h-full w-full rounded-md object-cover p-6 md:h-28 md:w-28"
                             src="https://files.catbox.moe/9i0d2g.png" alt="Music cover"/>
                    </div>
                    <div className="place-self-center py-6 px-3">
                        <div className="flex">
                          <span className="flex h-3 w-3">
                            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                          </span>
                            <div className="ml-2 mb-2 text-sm uppercase leading-3 text-white">now playing</div>
                        </div>
                        <div
                            className="mt-1 block text-lg font-semibold leading-tight text-white">十万嬉皮 <a className="text-sm font-medium uppercase leading-3 tracking-wide text-gray-400">万能青年旅店</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

MusicPlayer.defaultProps = {
    youtubeId: "iN3KsbnQZxU",
}