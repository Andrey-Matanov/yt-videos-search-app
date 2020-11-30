import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            onClick={() => {
                onVideoSelect(video);
            }}
            className="item video-item"
        >
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            ></img>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <div className="description">
                    <p>Description</p>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
