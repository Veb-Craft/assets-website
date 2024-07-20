// Helper function to get different aspects ration to build the masonary layout
export const getMediaAspectRatio = (index) => {
  if (index === 0) return "aspect-[1/1]";
  if (index % 2 === 0) return "aspect-[2/3]";
  if (index % 3 === 0) return "aspect-[3/2]";
  if (index % 5 === 0) return "aspect-[3/4]";
  if (index % 7 === 0) return "aspect-[4/3]";
  if (index % 7 === 0) return "aspect-[5/3]";
  if (index % 11 === 0) return "aspect-[3/5]";
  return "aspect-[1/1]";
};

// Helper function to get random indices within a range
export const getRandomIndices = (min, max, count) => {
  if (min > max) {
    [min, max] = [max, min]; // Swap if min is greater than max
  }

  const range = max - min + 1;
  if (count > range) {
    throw new Error(
      "Count cannot be greater than the range of possible numbers",
    );
  }

  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * range) + min);
  }
  return Array.from(indices);
};
