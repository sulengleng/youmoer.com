import {audios} from "../../data/audioData";
import Player from "../../components/musicPlayer";
import { useState } from "react";
import {addPropertyControls, ControlType} from "framer";
import MusicPlayer from "../../components/music_player";


export default function Music() {
    const [Songs, setSongs] = useState(audios);
    return (
        <div>
            <Player Songs={Songs} />
        </div>
    );
}
