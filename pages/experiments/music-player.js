import {react, useEffect, useRef} from "react";
import { audios } from "data/musicData";
import { useState } from "react";
import { Play, Pause } from "phosphor-react";
import Player from "../../components/musicPlayer";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElem = useRef();

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    }, [isPlaying]);

    const PlayPause = () => {
        audioElem.current.play();
    };

    return (
        <div>
            <audio autoPlay={isPlaying} className="hidden" src="http://music.163.com/song/media/outer/url?id=386844.mp3" ref={audioElem} />
            <Player isplaying={isPlaying} seisPlaying={setIsPlaying()} audioElem={audioElem}/>
        </div>
    );
}

