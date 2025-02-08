import React from "react";
import DarkModeBtn from "../atoms/DarkModeBtn";
import LogOutBtn from "../atoms/LogOutBtn";
import SettingsMenuLink from "../atoms/SettingsMenuLink";

interface SettingsMenuProps {
  navRef: React.RefObject<HTMLDivElement>;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ navRef }) => {
  return (
    <div ref={navRef} className=" absolute bottom-0 p-2 left-14 md:left-10 w-auto flex flex-col justify-start items-start ">
      <div  className={`bg-light-secondary dark:bg-dark-secondary border-light-border dark:border-dark-border border-2 w-full h-full overflow-hidden flex flex-col justify-start items-center gap-2 p-2 mt-4 rounded-tl-lg rounded-br-lg`}>
        <SettingsMenuLink
          text="profile settings"
          path="/profile"
          pathName="Perfil"

        />
        <SettingsMenuLink
          text="mensajes"
          path="/messages"
          pathName="mensajes"

        />
        <div className="flex flex-col items-end justify-center gap-2">
          <DarkModeBtn />
          <LogOutBtn />
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
