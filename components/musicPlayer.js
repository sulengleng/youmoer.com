import {react} from "react";
import {audios} from "../data/audioData";
import {
        PlayCircle,
        PauseCircle
        } from "phosphor-react";

export default function Player({Songs}) {
    return (
        <div>
            <PlayCircle size={16} />
            <PauseCircle size={16} />
        </div>
    );
}