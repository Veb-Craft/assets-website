import React from "react";
import { useLocation } from "react-router-dom";
import { heroData } from "../data";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-[#151515] !text-white">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroData.BACKGROUND_IMAGE}
          alt=""
          className="-z-10 h-full w-full object-contain pt-16"
        />
      </div>

      {/* Hero Content - Mobile */}
      <div className="flex h-full w-full translate-y-5 flex-col items-center justify-center p-5 md:hidden">
        <div className="h-1/3 w-2/3 self-start">
          {/* Heading */}
          <h1 className="text-4xl font-bold">{heroData.HEADING}</h1>
        </div>
        <div className="h-1/3 w-1/2 self-end">
          {/* Tagline */}
          <h3 className="text-end text-2xl font-medium">{heroData.TAGLINE}</h3>
        </div>
        <div className="h-1/3 w-2/3 self-start">
          {/* Subheading */}
          <h2 className="whitespace-pre-line text-4xl font-bold">
            {heroData.SUBHEADING}
          </h2>
        </div>
      </div>

      {/* Hero Content - Desktop */}
      <div className="m-auto hidden h-full flex-col items-center justify-center p-10 md:flex">
        {/* Top Text container */}
        <div className="grid -translate-y-10 grid-cols-3 grid-rows-3 px-2">
          {/* Heading */}
          <h1 className="translate-y-16 self-center text-3xl font-bold">
            {heroData.HEADING}
          </h1>
          {/* Divider */}
          <div className="col-span-2 row-start-2 h-1 translate-y-8 self-center rounded-full bg-white/50" />
          {/* Tags */}
          <span className="col-start-2 row-start-3 flex justify-end self-center">
            <p className="whitespace-pre-line text-start text-xl">
              {heroData.TAGS}
            </p>
          </span>
        </div>

        {/* Bottom container */}
        <div className="grid w-full grid-cols-2 p-2">
          {/* Subheading */}
          <h2 className="self-start whitespace-pre-line text-5xl font-bold">
            {heroData.SUBHEADING}
          </h2>
          <div className="grid w-full grid-cols-2 grid-rows-3">
            {/* Tagline */}
            <h3 className="row-start-2 text-end text-lg">{heroData.TAGLINE}</h3>
            {/* CTA */}

            <ConditionalLink
              className="peer row-start-3 text-end text-3xl underline duration-150 ease-in hover:scale-105"
              href="#assets"
            >
              {heroData.CTA}
            </ConditionalLink>
            {/* Social Proof */}
            <div className="col-start-2">
              <SocialProof />
            </div>
            {/* Arrow */}
            <div className="col-start-2 row-span-2 row-start-2 flex items-center justify-center transition-all duration-150 ease-in peer-hover:-rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth=".5"
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Tab */}
      <div className="absolute bottom-0 h-5 w-full rounded-t-full bg-gray-100"></div>
    </section>
  );
};

export default Hero;

const SocialProof = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around gap-2">
      <div className="flex w-full justify-center">
        <Avatars avatarImages={heroData.SOCIAL_PROOF.avatarUrls} />
      </div>
      <div className="flex w-full justify-center">
        <h6 className="w-44 self-end px-4 text-start text-base">
          {heroData.SOCIAL_PROOF.tagline}
        </h6>
      </div>
    </div>
  );
};

const Avatars = ({ className, avatarImages }) => {
  return (
    <span className={`z-10 flex -space-x-3 ${className}`}>
      {avatarImages.map((image, index) => (
        <img
          key={index}
          className="size-10 rounded-full border-2 border-white"
          src={image}
          alt=""
        />
      ))}
      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white">
        +99
      </span>
    </span>
  );
};

const ConditionalLink = ({ href, children, ...props }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <a href="" {...props}>
        {children}
      </a>
    );
  }
};
