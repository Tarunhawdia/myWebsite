import React from "react";
import "./BackgroundVideo.css";
import fireVideo from "../assets/fire.mp4"; // Adjust the path based on your project structure

const BackgroundVideo: React.FC = () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={fireVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
