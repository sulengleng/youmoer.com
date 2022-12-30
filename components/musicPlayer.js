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
        <div className="player">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <div className="absolute place-items-center h-36 w-full hover:bg-gray-500/80">
                            {isPlaying ? (
                                <PauseCircle size={76} className="opacity-50"  color="#f6f5f6" onClick={togglePlay} />
                            ) : (
                                <PlayCircle size={76} className="opacity-50"  color="#f6f5f6" onClick={togglePlay} />
                            )}
                        </div>
                        <img className="h-36 w-full object-cover md:h-full md:w-36" src="https://files.catbox.moe/9i0d2g.png"
                             alt="Music cover" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats
                        </div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                            accomodation for your team</a>
                    </div>
                </div>
            </div>
        </div>
    );
}