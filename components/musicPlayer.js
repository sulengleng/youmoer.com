import {react} from "react";
import {audios} from "../data/audioData";
import { Play } from "react-feather";

export default function Player({Songs}) {
    return (
        <div>
            <Play size={16} />
        </div>
    );
}