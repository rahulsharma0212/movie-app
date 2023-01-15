import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import useWindowSize from "../../hooks/useWindowResize";
import NavigationSwiper from "./NavigationSwiper";

const MediaVideo = ({ video }) => {
  const iframeRef = useRef();
  const { width: windowWidth } = useWindowSize();
  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 8) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, [video, windowWidth]);
  return (
    <Box sx={{ height: "max-content" }}>
      <iframe
        key={video.key}
        src={tmdbConfigs.youtubePath(video.key)}
        ref={iframeRef}
        width="100%"
        title={video.name}
        style={{ border: 0 }}
      ></iframe>
    </Box>
  );
};

const MediaVideoSlide = ({ videos }) => {
  return (
    <NavigationSwiper>
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <MediaVideo video={video} />
        </SwiperSlide>
      ))}
    </NavigationSwiper>
  );
};

export default MediaVideoSlide;
