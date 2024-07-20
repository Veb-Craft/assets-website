import React, { useState, useEffect } from "react";

// Custom hook to determine the number of columns based on screen size
const useResponsiveColumns = () => {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3);
      } else if (window.innerWidth >= 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return columns;
};

const Gallery = ({ children }) => {
  const columns = useResponsiveColumns();

  const childrenArray = React.Children.toArray(children);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const columnChunks = chunkArray(
    childrenArray,
    Math.ceil(childrenArray.length / columns),
  );

  return (
    <div className={`grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3`}>
      {columnChunks.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col space-y-4">
          {column.map((child, childIndex) => (
            <div key={childIndex}>{child}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
