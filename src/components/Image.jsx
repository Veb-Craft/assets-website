import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

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
      },
    );
  };

  return { message, copied, handleCopy };
};

const Image = ({ src, className }) => {
  const { message, copied, handleCopy } = useCopyToClipboard(src);

  return (
    <div
      className={twMerge("relative aspect-auto w-full", className)}
      onClick={handleCopy}
    >
      <img src={src} alt="" />
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
