import React from "react";

const Gallery = ({ children }) => {
  return (
    <div className="columns-1 gap-4 space-y-4 p-4 md:columns-2 lg:columns-3">
      {children}
    </div>
  );
};

export default Gallery;
