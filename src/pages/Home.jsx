import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Video from "../components/Video";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";
import { navbarData, homepageData } from "../data";
import { VIDEOS, IMAGES } from "../assets_data";

const Home = () => {
  const videoIndices = useMemo(() => getRandomIndices(1, 10, 5), []);
  const imageIndices = useMemo(() => getRandomIndices(1, 8, 5), []);

  return (
    <>
      <div className="h-auto w-full "></div>
      <div className="h-auto w-full">
        <SectionHeading heading={homepageData.VIDEO_SECTION_HEADING} />
        <Gallery>
          {videoIndices.map((index) => (
            <Video key={index} src={VIDEOS[index]} autoPlay={true} />
          ))}
          <MoreCard navigationURL={navbarData.VIDEOS.url} />
        </Gallery>
      </div>
      <div className="h-auto w-full">
        <SectionHeading heading={homepageData.IMAGE_SECTION_HEADING} />
        <Gallery>
          {imageIndices.map((index) => (
            <Image key={index} src={IMAGES[index]} />
          ))}
          <MoreCard navigationURL={navbarData.IMAGES.url} />
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
      "Count cannot be greater than the range of possible numbers"
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
    <h2 className="mx-auto mb-4 mt-8 px-4 text-left text-4xl font-bold sm:text-6xl">
      {heading}
    </h2>
  );
};

const MoreCard = ({ navigationURL }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigationURL) {
      navigate(navigationURL);
    }
  };

  return (
    <div
      className="group flex h-full w-full items-center justify-center"
      onClick={handleClick}
    >
      <h4 className="text-4xl font-bold duration-150 ease-in-out group-hover:scale-110 group-hover:text-blue-600">
        View More...
      </h4>
    </div>
  );
};
