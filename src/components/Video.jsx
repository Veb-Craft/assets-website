import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Skeleton from "./Skeleton.jsx";  // Ensure the import path is correct

const useCopyToClipboard = (text) => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setMessage("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 500);
      },
      (err) => {
        setMessage("Unable to copy to clipboard");
        console.error("Unable to copy to clipboard", err);
      }
    );
  };

  return { message, copied, handleCopy };
};

const Video = ({ src, className, autoPlay = false }) => {
  const [loading, setLoading] = useState(true);
  const { message, copied, handleCopy } = useCopyToClipboard(src);
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play();
    }
  }, [autoPlay]);

  const handleMouseEnter = () => {
    if (!autoPlay && videoRef.current) {
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
    setLoading(false);
  };

  return (
    <div
      className={twMerge("relative aspect-auto w-full", className)}
      onClick={handleCopy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {loading && <Skeleton className="h-[22rem] w-full" />}
      <video
        ref={videoRef}
        loop
        muted
        loading="lazy"
        className={`h-full w-full object-cover ${loading ? 'hidden' : ''}`}
        playsInline
        autoPlay={autoPlay}
        onLoadedData={handleLoadedData}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="rounded-full bg-gray-900 px-4 py-2 text-base font-bold text-white">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Video;
