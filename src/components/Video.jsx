import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { navbarData } from "../data";

const useCopyToClipboard = (text) => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  const handleCopy = (onHomePage) => {
    if (onHomePage) return;
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setMessage("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 500);
      },
      (err) => {
        setMessage("Unable to copy to clipboard");
        console.error("Unable to copy to clipboard", err);
      },
    );
  };

  return { message, copied, handleCopy };
};

const Video = ({
  src,
  className,
  autoPlay = false,
  lazyLoad = false,
  onHomePage = false,
}) => {
  const navigate = useNavigate();
  const { message, copied, handleCopy } = useCopyToClipboard(src);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(!lazyLoad);

  useEffect(() => {
    if (!lazyLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }, // 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [lazyLoad]);

  useEffect(() => {
    if (shouldRender && autoPlay && videoRef.current) {
      videoRef.current.play();
    }
  }, [shouldRender, autoPlay]);

  const handleMouseEnter = () => {
    if (shouldRender && !autoPlay && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!autoPlay && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleLoadedData = () => {
    setVideoLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      onClick={() => handleCopy(onHomePage)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Skeleton */}
      {!videoLoaded && (
        <div className="absolute inset-0 animate-pulse rounded-2xl bg-gray-400" />
      )}
      {shouldRender && (
        <video
          ref={videoRef}
          loop
          muted
          className={twMerge(
            "h-full w-full rounded-2xl object-cover shadow-2xl",
            className,
            ` ${videoLoaded ? "opacity-100" : "opacity-0"}`,
          )}
          playsInline
          autoPlay={autoPlay}
          onLoadedData={handleLoadedData}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="rounded-full bg-gray-900 px-4 py-2 text-base font-bold text-white">
            {message}
          </p>
        </div>
      )}
      {onHomePage && (
        <div
          onClick={() => navigate(navbarData.LINKS.VIDEOS.link)}
          className="group absolute inset-0 flex items-center justify-center rounded-2xl duration-200 ease-out hover:bg-gray-700/50"
        >
          <p className="scale-90 cursor-default select-none rounded-full px-4 py-2 text-4xl font-bold text-black opacity-0 transition-all ease-linear group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100 group-hover:duration-200">
            More...
          </p>
        </div>
      )}
    </div>
  );
};

export default Video;
