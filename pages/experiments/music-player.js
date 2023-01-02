import {audios} from "../../data/audioData";
import Player from "../../components/musicPlayer";
import { useState } from "react";
import MusicPlayer from "../../components/music_player";
import { addPropertyControls } from 'react-inspector'

export default function Music() {
    const [Songs, setSongs] = useState(audios);
    return (
        <Player Songs={Songs} />
    );
}