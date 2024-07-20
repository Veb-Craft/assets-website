import React from "react";

import Gallery from "../components/Gallery";
import Video from "../components/Video";

import { getMediaAspectRatio } from "../util/functions";

import { videospageData } from "../data";
import { VIDEOS } from "../assets_data";

const Videos = () => {
  return (
    <section className="h-auto w-full">
      <h2 className="mx-auto mb-4 mt-8 px-4 text-left text-4xl font-bold sm:text-6xl">
        {videospageData.PAGE_HEADING}
      </h2>
      <Gallery>
        {VIDEOS.map((video, index) => (
          <div key={index} className={`w-full ${getMediaAspectRatio(index)}`}>
            <Video key={index} src={video} lazyLoad={true} />
          </div>
        ))}
      </Gallery>
    </section>
  );
};

export default Videos;
