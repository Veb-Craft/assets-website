import React from "react";

import Gallery from "../components/Gallery";
import Image from "../components/Image";

import { imagespageData } from "../data";
import { IMAGES } from "../assets_data";

const Images = () => {
  return (
    <div className="h-auto w-full">
      <h2 className="mx-auto mb-4 mt-8 px-4 text-left text-4xl font-bold sm:text-6xl">
        {imagespageData.PAGE_HEADING}
      </h2>
      <Gallery>
        {IMAGES.map((image, index) => (
          <Image key={index} src={image} />
        ))}
      </Gallery>
    </div>
  );
};

export default Images;
