interface VideoPlayerProps {
  programAtAGlance: string;
  programImageCheck?: string;
  programCoordinators?: string;
}

const VideoPlayerBody: React.FC<VideoPlayerProps> = ({
  programAtAGlance,
  programImageCheck,
  programCoordinators,
}) => {
  return (
    <div id="video-player-container">
      <video
        controls
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        preload="auto"
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
      <div id="popup-close">
        <img
          src="https://tcnj.edu/custom/homepage/img/compressed/anthem/close-item-white.svg"
          alt="Close"
        />
      </div>
    </div>
  );
};
export default VideoPlayerBody;
