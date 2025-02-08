import React from "react";
import SettingsButton from "../atoms/SettingsButton";
import SettingsMenu from "./SettingsMenu";

interface SettingsMenuButtonProps {
  image: string | null;
  noAvatar: string;
  handleClick: () => void;
  show: boolean;
  navRef: React.RefObject<HTMLDivElement>;
}

const SettingsMenuButton: React.FC<SettingsMenuButtonProps> = ({
  image,
  noAvatar,
  handleClick,
  show,
  navRef,
}) => {
  return (
    <div className="relative">
      <SettingsButton
        navRef={navRef}
        image={image}
        noAvatar={noAvatar}
        handleClick={handleClick}
        show={show}
      />
      {show && <SettingsMenu navRef={navRef} />}
    </div>
  );
};

export default SettingsMenuButton;
