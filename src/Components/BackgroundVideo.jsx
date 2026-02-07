import mp4 from "../images/bitiko-background.mp4"; // adjust path if needed
import mp5 from "../images/skyscraper.mp4"; 
import mp6 from "../images/openart-nowatermark.mp4"; 
// optional: import poster from "../assets/bitiko-fallback.jpg";

export default function BackgroundVideo() {
  return (
    <>
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        // poster={poster}
        preload="metadata"
      >
        <source src={mp6} type="video/mp4" />
      </video>
      <div className="bg-video-overlay" />
    </>
  );
}
