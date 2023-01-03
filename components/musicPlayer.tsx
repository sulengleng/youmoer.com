import {react, useState} from "react";

import {Pause, Play} from "phosphor-react";

const Player = ({audioElem, isplaying, setisplayingr}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const PlayPause = () => {
        setisplayingr(!isplaying);
    }
    return (
        <div className="player mt-6 select-none">
            <div className="mx-auto max-w-[85%] overflow-hidden rounded-xl bg-gradient-to-r from-black via-[#083517] to-[#065321] shadow-md md:max-w-sm">
                <div className="flex">
                    <div className="items-center">
                        <a className="text-white"></a>
                    </div>
                    <div className="relative md:place-items-center">
                        <div className="absolute items-center justify-center">
                            {isPlaying ? (
                                <Pause size={32} className="opacity-50 ml-10 mt-10 md:ml-10 md:mt-10" color="#f6f5f6" onClick={togglePlay}/>
                            ) : (
                                <Play size={32} className="opacity-50 ml-10 mt-10 md:ml-10 md:mt-10" color="#f6f5f6" onClick={togglePlay}/>
                            )}
                        </div>
                        <img className="h-28 w-28 md:h-full md:w-full rounded-md object-cover p-6 md:h-28 md:w-28"
                             src="https://files.catbox.moe/9i0d2g.png" alt="Music cover"/>
                    </div>
                    <div className="place-self-center py-6 px-3">
                        {isPlaying ? (
                            <div className="flex">
                                  <span className="flex h-3 w-3">
                                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75"></span>
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                  </span>
                                <div className="ml-2 mb-2 text-sm uppercase leading-3 text-white">now playing</div>
                            </div>
                        ) : (
                            <div className="flex">
                                  <span className="flex h-3 w-3">
                                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-red-600 opacity-75"></span>
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                                  </span>
                                <div className="ml-2 mb-2 text-sm uppercase leading-3 text-white">not playing</div>
                            </div>
                        )}
                        <div
                            className="mt-1 block text-lg font-semibold leading-tight text-white hover:underline">十万嬉皮 <a className="text-sm font-medium uppercase leading-3 tracking-wide text-gray-400">万能青年旅店</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;