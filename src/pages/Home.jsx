import React, { useMemo } from "react";

import Gallery from "../components/Gallery";
import Video from "../components/Video";
import Image from "../components/Image";

import { homepageData } from "../data";
import { VIDEOS, IMAGES } from "../assets_data";

const Home = () => {
  const videoIndices = useMemo(() => getRandomIndices(1, 10, 6), []);
  const imageIndices = useMemo(() => getRandomIndices(1, 8, 6), []);

  return (
    <>
      <div className="h-auto w-full">
        <SectionHeading heading={homepageData.VIDEO_SECTION_HEADING} />
        <SectionSubHeading subHeading={homepageData.VIDEO_SECTION_SUBHEADING} />
        <Gallery>
          {videoIndices.map((index) => (
            <Video
              key={index}
              src={VIDEOS[index]}
              autoPlay={true}
              onHomePage={true}
            />
          ))}
        </Gallery>
      </div>
      <div className="h-auto w-full">
        <SectionHeading heading={homepageData.IMAGE_SECTION_HEADING} />
        <SectionSubHeading subHeading={homepageData.IMAGE_SECTION_SUBHEADING} />
        <Gallery>
          {imageIndices.map((index) => (
            <Image key={index} src={IMAGES[index]} onHomePage={true} />
          ))}
        </Gallery>
      </div>
    </>
  );
};

export default Home;

// Helper function to get random indices within a range
const getRandomIndices = (min, max, count) => {
  if (min > max) {
    [min, max] = [max, min]; // Swap if min is greater than max
  }

  const range = max - min + 1;
  if (count > range) {
    throw new Error(
      "Count cannot be greater than the range of possible numbers",
    );
  }

  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * range) + min);
  }
  return Array.from(indices);
};

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
