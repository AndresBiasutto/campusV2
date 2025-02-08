import React from "react";

interface ImageProps {
  image: string | null;
}

const AvatarImage: React.FC<ImageProps> = ({ image }) => {
  return (
    <img
      className=" w-full h-full rounded-full object-cover border-2 border-light-border dark:border-dark-border"
      src={image || undefined}

    />
  );
};

export default AvatarImage;
