import { Link } from "react-router-dom";
import React, { ReactNode } from 'react';

interface ContainerProps {
  btnName: string; 
  icon: ReactNode,
  bgColor: string,
  linkTo: string, 
  action: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void; 
}

const LinkBtn: React.FC<ContainerProps> = ({ btnName, icon, bgColor, linkTo, action }) => {
  return (
    <Link
      to={linkTo}
      onClick={action}
      className={` group h-14 md:h-8 pl-2 pr-2 min-w-28 flex flex-row items-center justify-between gap-1 rounded-tl-lg rounded-br-lg bg-light-${bgColor} dark:bg-dark-${bgColor} text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border font-bold transition md:hover:shadow-light md:dark:hover:shadow-dark`}
    >
      {btnName}  <i className=" md:group-hover:scale-105 text-2xl">{icon} </i>
    </Link>
  );
};

export default LinkBtn;
