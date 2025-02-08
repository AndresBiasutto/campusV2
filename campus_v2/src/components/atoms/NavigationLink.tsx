import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  pathName: string;
  path: string;
  text: string;
  icon: ReactNode | undefined;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  path,
  pathName,
  icon,
}) => {
  return (
    <Link
    aria-activedescendant={path}
    to={path}
      className=" font-bold md:hover:bg-light-primary md:dark:hover:bg-dark-primary p-1 rounded-tl-lg rounded-br-lg group w-full max-w-52 flex flex-row justify-between items-center flex-nowrap text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border md:hover:shadow-light md:dark:hover:shadow-dark transition-all"
    >
      {pathName} <i className=" md:group-hover:scale-105 text-nowrap text-3xl md:text-2xl ml-6 md:ml-4">{icon} </i>
    </Link>
  );
};

export default NavigationLink;
