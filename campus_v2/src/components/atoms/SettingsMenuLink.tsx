import React from "react";
import { Link } from "react-router-dom";

interface SettingsMenuLinkProps {
  pathName: string;
  path: string;
  text: string;
}

const SettingsMenuLink: React.FC<SettingsMenuLinkProps> = ({
  path,
  pathName,
}) => {
  return (
    <Link
    aria-activedescendant={path}
    to={path}
      className=" md:hover:bg-light-primary md:dark:hover:bg-dark-primary p-1 rounded-tl-lg rounded-br-lg group w-full flex flex-row justify-between items-center flex-nowrap text-light-text dark:text-dark-text md:dark:hover:shadow-dark transition-all"
    >
      {pathName} 
    </Link>
  );
};

export default SettingsMenuLink;