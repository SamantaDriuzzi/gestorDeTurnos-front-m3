import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { VideoContainer } from "../../styled-components/Home/VideoContainer";

const ClipsHome = ({ clips }) => {
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    const nextClipIndex = (currentClipIndex + 1) % clips.length;
    setCurrentClipIndex(nextClipIndex);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentClipIndex]);

  return (
    <VideoContainer>
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        onEnded={handleVideoEnd}
        src={clips[currentClipIndex]}
        autoPlay
        muted
        playsInline
        style={{ objectFit: "cover" }}
      />
    </VideoContainer>
  );
};

ClipsHome.propTypes = {
  clips: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ClipsHome;
