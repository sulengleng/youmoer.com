import {react} from "react";
import {audios} from "../data/audioData";
import {useState} from "react";
import {PlayCircle, PauseCircle} from "phosphor-react";

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }
    return (
        <div className="player mt-6">
            <div className="mx-auto max-w-[80%] overflow-hidden rounded-xl bg-gradient-to-r from-black via-[#083517] to-[#065321] shadow-md md:max-w-sm">
                <div className="flex">
                    <div className="items-center">
                        <a className="text-white"></a>
                    </div>
                    <div className="relative md:place-items-center">
                        <div className="absolute items-center">
                            {isPlaying ? (
                                <PauseCircle size={48} className="opacity-50" color="#f6f5f6" onClick={togglePlay}/>
                            ) : (
                                <PlayCircle size={48} className="opacity-50" color="#f6f5f6" onClick={togglePlay}/>
                            )}
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
                            className="mt-1 block text-lg font-semibold leading-tight text-white hover:underline">十万嬉皮 <a className="text-sm font-medium uppercase leading-3 tracking-wide text-gray-400">万能青年旅店</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}