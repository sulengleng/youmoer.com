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
        <div className="player pt-6">
            <div className="max-w-md mx-auto bg-gradient-to-r from-black via-[#041c0c] to-[#062a13] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0 h-20 w-20 place-self-center">
                        <div className="absolute h-20 w-20 place-items-center">
                            {isPlaying ? (
                                <PauseCircle size={76} className="opacity-50 place-self-center"  color="#f6f5f6" onClick={togglePlay} />
                            ) : (
                                <PlayCircle size={76} className="opacity-50 place-self-center"  color="#f6f5f6" onClick={togglePlay} />
                            )}
                        </div>
                        <img className="h-20 w-full object-cover md:h-full md:w-20 rounded-md pl-4" src="https://files.catbox.moe/9i0d2g.png"
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