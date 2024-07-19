import React from 'react';
import { twMerge } from 'tailwind-merge';

const Skeleton = ({ className }) => {
  return (
    <div className={twMerge("animate-pulse bg-gray-200", className)}></div>
  );
};

export default Skeleton;
