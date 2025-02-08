import React, { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  toggle: boolean;
}

const Icon: React.FC<IconProps> = ({ icon, toggle }) => {
  return (
    <div
      className={`transform h-8 w-8 flex items-center justify-center p-1 rounded-full hover:scale-105 text-light-text dark:text-dark-text bg-light-accent dark:bg-dark-accent transition-transform duration-500 ${
        toggle && "rotate-180"
      }`}
    >
      {icon}
    </div>
  );
};

export default Icon;
