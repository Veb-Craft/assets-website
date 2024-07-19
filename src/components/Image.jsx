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
const Image = ({ src, className, lazyLoad = false, onHomePage = false }) => {
  const navigate = useNavigate();
  const { message, copied, handleCopy } = useCopyToClipboard(src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(!lazyLoad);
  const containerRef = useRef(null);

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
    if (shouldRender) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [src, shouldRender]);

  return (
    <div
      ref={containerRef}
      className={twMerge("relative aspect-auto w-full", className)}
      onClick={() => handleCopy(onHomePage)}
    >
      {/* Skeleton */}
      {(!imageLoaded || !shouldRender) && (
        <div className="absolute inset-0 animate-pulse bg-gray-400" />
      )}
      {shouldRender && (
        <img
          src={src}
          alt=""
          className={`h-full w-full object-cover ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {copied && !onHomePage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="rounded-full bg-gray-900 px-4 py-2 text-base font-bold text-white">
            {message}
          </p>
        </div>
      )}
      {onHomePage && (
        <div
          onClick={() => navigate(navbarData.IMAGES.url)}
          className="group absolute inset-0 flex items-center justify-center duration-200 ease-out hover:bg-gray-300/50"
        >
          <p className="scale-90 cursor-default select-none rounded-full px-4 py-2 text-4xl font-bold text-black opacity-0 transition-all ease-linear group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100 group-hover:duration-200">
            More...
          </p>
        </div>
      )}
    </div>
  );
};

export default Image;
