import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  title: string;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bgColor:string;
}
const RoundedBtn: React.FC<ContainerProps> = ({ children, action, title, bgColor }) => {
  return (
    <button
      onClick={action}
      className={`group h-10 w-10 p-2 rounded-full flex items-center justify-center bg-light-${bgColor} dark:bg-dark-${bgColor} text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border md:hover:shadow-light md:dark:hover:shadow-dark  transition-all`}
      title={title}
    >
      {children}
    </button>
  );
};

export default RoundedBtn;
