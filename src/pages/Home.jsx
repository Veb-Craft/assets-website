import React, { useMemo } from "react";

import Gallery from "../components/Gallery";
import Video from "../components/Video";
import Image from "../components/Image";

import { getRandomIndices } from "../util/functions";

import { homepageData } from "../data";
import { VIDEOS, IMAGES } from "../assets_data";

const Home = () => {
  const videoIndices = useMemo(() => getRandomIndices(1, 10, 6), []);
  const imageIndices = useMemo(() => getRandomIndices(1, 8, 6), []);

  return (
    <section id="assets">
      <section className="h-auto w-full">
        <SectionHeading heading={homepageData.VIDEO_SECTION_HEADING} />
        <SectionSubHeading subHeading={homepageData.VIDEO_SECTION_SUBHEADING} />
        <Gallery>
          {videoIndices.map((index) => (
            <div key={index} className="aspect-square w-full">
              <Video src={VIDEOS[index]} autoPlay={true} onHomePage={true} />
            </div>
          ))}
        </Gallery>
      </section>
      <section className="h-auto w-full">
        <SectionHeading heading={homepageData.IMAGE_SECTION_HEADING} />
        <SectionSubHeading subHeading={homepageData.IMAGE_SECTION_SUBHEADING} />
        <Gallery>
          {imageIndices.map((index) => (
            <div key={index} className="aspect-square w-full">
              <Image src={IMAGES[index]} onHomePage={true} />
            </div>
          ))}
        </Gallery>
      </section>
    </section>
  );
};

export default Home;

const SectionHeading = ({ heading }) => {
  return (
    <h2 className="mx-auto my-4 cursor-default select-none px-4 text-left text-4xl font-bold sm:text-6xl">
      {heading}
    </h2>
  );
};
const SectionSubHeading = ({ subHeading }) => {
  return (
    <h3 className="text xl mx-auto my-4 cursor-default select-none px-4 text-left font-medium sm:text-2xl">
      {subHeading}
    </h3>
  );
};
