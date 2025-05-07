import React, { useRef, useState, useEffect } from "react";
import { useVideoStore } from "../../stores/useVideoStore";
import "../../styles/gradient-styles.scss";
import { v4 as uuidv4 } from "uuid";

interface VideoPlayerProps {
  videoUrl?: string;
  posterImage?: string;
  captionUrl?: string;
  indexNumber: number;
}

const VideoPlayerBody: React.FC<VideoPlayerProps> = ({
  videoUrl = "https://player.vimeo.com/progressive_redirect/playback/1045005215/rendition/1080p/file.mp4?loc=external&signature=aab76518d4c1b73210f37b990644114d81f4f8d6a84d7bd97a95bfef8f5abbf1",
  posterImage = "https://tcnj.edu/custom/homepage/img/compressed/anthem/anthem-thumbnail.jpg",
  captionUrl = "https://tcnj.edu/custom/homepage/captions/anthem-video-captions2.vtt",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentVideoId, setCurrentVideoId } = useVideoStore();
  const thisVideoId = useRef(uuidv4()).current;

  // Pause if another video starts
  useEffect(() => {
    if (currentVideoId !== thisVideoId && isPlaying) {
      videoRef.current?.pause();
      videoRef.current!.controls = false;
      setIsPlaying(false);
    }
  }, [currentVideoId, isPlaying, thisVideoId]);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (video) {
      try {
        await video.play();
        video.controls = true;
        setIsPlaying(true);
        setCurrentVideoId(thisVideoId);
      } catch (err) {
        console.error("Autoplay/play failed:", err);
      }
    }
  };

  return (
    <div className="video-player-container relative w-full max-w-[1200px] mx-auto">
      {/* Wrapper to maintain aspect ratio for playing video */}
      <div className="relative w-full h-[500px] sm:h-auto sm:aspect-w-16 sm:aspect-h-9 bg-black overflow-hidden">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full ${
            isPlaying ? "object-contain" : "object-cover"
          }`}
          controls={false}
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload noplaybackrate"
          poster={posterImage}
        >
          <source src={videoUrl} type="video/mp4" />
          {captionUrl && (
            <track
              kind="captions"
              label="English"
              src={captionUrl}
              srcLang="en"
            />
          )}
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/30"
          >
            <img
              src="../../video-play-button.svg"
              alt="Play"
              className="w-[100px] sm:w-[125px] h-[100px] sm:h-[125px]"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayerBody;
