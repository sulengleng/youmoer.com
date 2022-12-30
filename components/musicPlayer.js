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
            <div className="max-w-md mx-auto bg-gradient-to-r from-black via-[#041c0c] to-[#062a13] rounded-xl shadow-md overflow-hidden md:max-w-sm">
                <div className="flex">
                    <div className="md:shrink-0 h-48 w-48 md:place-items-center">
                        <div className="absolute">
                            {isPlaying ? (
                                <PauseCircle size={48} className="opacity-50"  color="#f6f5f6" onClick={togglePlay} />
                            ) : (
                                <PlayCircle size={48} className="opacity-50"  color="#f6f5f6" onClick={togglePlay} />
                            )}
                        </div>
                        <img className="h-20 w-full object-cover md:h-[60%] md:w-[60%] rounded-md ml-4" src="https://files.catbox.moe/9i0d2g.png"
                             alt="Music cover" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-gray-500 font-medium">万能青年旅店
                        </div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-white hover:underline">十万嬉皮</a>
                    </div>
                </div>
            </div>
        </div>
    );
}