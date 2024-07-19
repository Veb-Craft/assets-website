import React from "react";

import Gallery from "../components/Gallery";
import Video from "../components/Video";

import { videospageData } from "../data";
import { VIDEOS } from "../assets_data";

const Videos = () => {
  return (
    <div className="h-auto w-full">
      <h2 className="mx-auto mb-4 mt-8 px-4 text-left text-4xl font-bold sm:text-6xl">
        {videospageData.PAGE_HEADING}
      </h2>
      <Gallery>
        {VIDEOS.map((video, index) => (
          <Video
            key={index}
            src={video}
            className={"aspect-[4/3]"}
            lazyLoad={true}
          />
        ))}
      </Gallery>
    </div>
  );
};

export default Videos;
