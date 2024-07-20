import React from "react";

import Gallery from "../components/Gallery";
import Image from "../components/Image";

import { getMediaAspectRatio } from "../util/functions";

import { imagespageData } from "../data";
import { IMAGES } from "../assets_data";

const Images = () => {
  return (
    <section className="h-auto w-full">
      <h2 className="mx-auto mb-4 mt-8 px-4 text-left text-4xl font-bold sm:text-6xl">
        {imagespageData.PAGE_HEADING}
      </h2>
      <Gallery>
        {IMAGES.map((image, index) => (
          <div key={index} className={`w-full ${getMediaAspectRatio(index)}`}>
            <Image src={image} lazyLoad={true} />
          </div>
        ))}
      </Gallery>
    </section>
  );
};

export default Images;
