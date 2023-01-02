import YouTube, { YouTubeProps } from "react-youtube"
import { useRef, useState } from "react"
import { Play, Pause } from "phosphor-react"
import { motion } from "framer-motion"
import React from "react"
import { addPropertyControls, ControlType } from "framer"

export default function MusicPlayer(props) {
    const [isPlaying, setIsPlaying] = useState(false)
    const player = useRef()

    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        player.current = event.target
    }

    const opts: YouTubeProps["opts"] = {
        height: "0",
        width: "0",
    }

    const videoId = props.videoId || "dQw4w9 WgXcQ" // Rick Roll

    function togglePlaying() {
        setIsPlaying((isPlaying) => {
            if (isPlaying) {
                // @ts-ignore
                player.current.pauseVideo()
            } else {
                // @ts-ignore
                player.current.playVideo()
            }

            return !isPlaying
        })
    }

    return (
        <div>
            <motion.div
                onClick={togglePlaying}
                whileTap={{ scale: 0.8 }}
                className="w-24 h-24 flex items-center border-[100px] justify-center bg-white cursor-pointer shadow-md"
            >
                <div className="flex items-center border-0 bg-none appearance-none absolute cursor-pointer">
                    {!isPlaying && <Play weight="fill" />}
                    {isPlaying && <Pause weight="fill" />}
                </div>
            </motion.div>

            <div className="hidden absolute">
                <YouTube
                    videoId={props.videoId}
                    opts={opts}
                    onReady={onPlayerReady}
                />
            </div>
        </div>
    )
}

MusicPlayer.defaultProps = {
    youtubeId: "iN3KsbnQZxU",
}

addPropertyControls(MusicPlayer, {
    youtubeId: {
        type: ControlType.String,
        title: "Youtube ID",
    },
})