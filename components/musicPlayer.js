import {react} from "react";
import {audios} from "../data/audioData";

export default function Player({Songs}) {
    return (
        <div>
            {Songs.map((song) => (
                <div>
                    <p>{song.name}</p>
                    <audio controls>
                        <source src={song.music} type="audio/mpeg" />
                    </audio>
                </div>
            ))}
        </div>
    );
}