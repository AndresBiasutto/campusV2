import React from "react";
import AvatarImage from "./AvatarImage";


interface SettingsButtonProps {
  image: string | null;
  noAvatar: string;
  handleClick: () => void;
  show: boolean;
  navRef: React.RefObject<HTMLDivElement>;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({
  image,
  noAvatar,
  handleClick,
}) => {
  return (
    <div className="relative">
      <button
        onClick={handleClick}
        title="Settings"
        className="w-12 h-12 md:w-9 md:h-9 flex justify-center items-center bg-light-primary dark:bg-dark-primary rounded-full hover:scale-105 transition"
      >
        {image !== null ? (
          <AvatarImage image={image} altText="settings" />
        ) : (
          <AvatarImage image={noAvatar} altText="settings" />
        )}
      </button>
    </div>
  );
};

export default SettingsButton;
