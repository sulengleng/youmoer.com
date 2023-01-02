"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_youtube_1 = require("react-youtube");
var react_1 = require("react");
var phosphor_react_1 = require("phosphor-react");
var framer_motion_1 = require("framer-motion");
function MusicPlayer(props) {
    var _a = (0, react_1.useState)(false), isPlaying = _a[0], setIsPlaying = _a[1];
    var player = (0, react_1.useRef)();
    var onPlayerReady = function (event) {
        player.current = event.target;
    };
    var opts = {
        height: "0",
        width: "0"
    };
    function togglePlaying() {
        setIsPlaying(function (isPlaying) {
            if (isPlaying) {
                player.current.pauseVideo();
            }
            else {
                player.current.playVideo();
            }
            return !isPlaying;
        });
    }
    return (React.createElement("div", null,
        React.createElement(framer_motion_1.motion.div, { onClick: togglePlaying, style: containerStyles, whileTap: { scale: 0.8 } },
            React.createElement("div", { style: __assign({}, buttonStyles) },
                !isPlaying && React.createElement(phosphor_react_1.Play, { weight: "fill" }),
                isPlaying && React.createElement(phosphor_react_1.Pause, { weight: "fill" }))),
        React.createElement("div", { style: iframeStyles },
            React.createElement(react_youtube_1["default"], { videoId: props.youtubeId, opts: opts, onReady: onPlayerReady }))));
}
exports["default"] = MusicPlayer;
MusicPlayer.defaultProps = {
    youtubeId: "iN3KsbnQZxU"
};
addPropertyControls(MusicPlayer, {
    youtubeId: {
        type: ControlType.String,
        title: "Youtube ID"
    }
});
var iframeStyles = {
    visibility: "hidden",
    position: "absolute"
};
var containerStyles = {
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    borderRadius: "100px",
    justifyContent: "center",
    background: "white",
    cursor: "pointer",
    boxShadow: "0 0 0 2px rgba(0,0,0,0.2)"
};
var buttonStyles = {
    display: "flex",
    alignItems: "center",
    border: "none",
    background: "none",
    appearance: "none",
    position: "absolute",
    cursor: "pointer"
};
