import React, { useRef, useState } from "react";
import "../../styles/gradient-styles.scss";

const VideoPlayerBody: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (video) {
      try {
        await video.play();
        video.controls = true;
        setIsPlaying(true);
      } catch (err) {
        console.error("Autoplay/play failed:", err);
      }
    }
  };

  return (
    <div className="video-player-container relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-auto"
        controls={false}
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate"
        poster="https://tcnj.edu/custom/homepage/img/compressed/anthem/anthem-thumbnail.jpg"
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/1045005215/rendition/1080p/file.mp4?loc=external&signature=aab76518d4c1b73210f37b990644114d81f4f8d6a84d7bd97a95bfef8f5abbf1"
          type="video/mp4"
        />
        <track
          kind="captions"
          label="English"
          src="https://tcnj.edu/custom/homepage/captions/anthem-video-captions2.vtt"
          srcLang="en"
        />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20"
        >
          <img
            src="../../video-play-button.svg"
            alt="Play"
            className="w-[125px] h-[125px]"
          />
        </button>
      )}
    </div>
  );
};

export default VideoPlayerBody;
