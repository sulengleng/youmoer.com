import {audios} from "../../data/audioData";
import Player from "../../components/musicPlayer";
import { useState } from "react";

export default function Music() {
    const [Songs, setSongs] = useState(audios);
    return (
        <Player Songs={Songs}/>
    );
}

