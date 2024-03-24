import React, { useState } from "react";
import VideoContext from "./videoContext";

const VideoContextProvider = ({ children }) => {
  const [videoId, setVideoId] = useState(null);

  return (
    <VideoContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContextProvider;
