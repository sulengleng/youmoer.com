import {audios} from "../../data/audioData";
import Player from "../../components/musicPlayer";
import { useState } from "react";

function Music() {
    const [Songs, setSongs] = useState(audios);
    return (
        <Player Songs={Songs} />
    );
}

export default Music;