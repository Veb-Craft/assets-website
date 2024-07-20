import React from "react";

import Gallery from "../components/Gallery";
import Image from "../components/Image";

import { getMediaAspectRatio } from "../util/functions";

import { imagespageData } from "../data";
import { IMAGES } from "../assets_data";

const Images = () => {
  return (
    <section className="h-auto w-full">
      <h2 className="mx-auto my-4 cursor-default select-none px-4 text-left text-4xl font-bold sm:text-6xl">
        {imagespageData.PAGE_HEADING}
      </h2>
      <h3 className="text xl mx-auto my-4 cursor-default select-none px-4 text-left font-medium sm:text-2xl">
        {imagespageData.PAGE_SUBHEADING}
      </h3>
      <Gallery>
        {IMAGES.map((video, index) => (
          <div key={index} className={`w-full ${getMediaAspectRatio(index)}`}>
            <Image key={index} src={video} lazyLoad={true} />
          </div>
        ))}
      </Gallery>
    </section>
  );
};

export default Images;
