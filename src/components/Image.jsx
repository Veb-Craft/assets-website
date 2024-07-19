import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Skeleton from "./Skeleton";  // Ensure the import path is correct

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

const Image = ({ src, className }) => {
  const [loading, setLoading] = useState(true);
  const { message, copied, handleCopy } = useCopyToClipboard(src);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false); // Set loading to false if there is an error loading the image
  };

  useEffect(() => {
    console.log(`Image loading state: ${loading}`);
  }, [loading]);

  return (
    <div
      className={twMerge("relative aspect-auto w-full", className)}
      onClick={handleCopy}
    >
      {loading && <Skeleton className="h-[22rem] w-full" />}
      <img
        src={src}
        alt=""
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleError}
        className={`h-full w-full object-cover ${loading ? 'hidden' : ''}`}
      />
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

export default Image;
