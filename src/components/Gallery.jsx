import React from "react";

const Gallery = ({ children }) => {
  return (
    <div className="grid h-auto w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default Gallery;
