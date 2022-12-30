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
                        <div className="absolute place-items-center">
                            {isPlaying ? (
                                <PauseCircle size={76} onClick={togglePlay} />
                            ) : (
                                <PlayCircle size={76} onClick={togglePlay} />
                            )}
                        </div>
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://files.catbox.moe/9i0d2g.png"
                             alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats
                        </div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                            accomodation for your team</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                            and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}