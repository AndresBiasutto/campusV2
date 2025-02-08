import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  title: string;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const RoundedBtn: React.FC<ContainerProps> = ({ children, action, title }) => {
  return (
    <button
      onClick={action}
      className={`group h-10 w-10 p-2 rounded-full flex items-center justify-center bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border md:hover:shadow-light md:dark:hover:shadow-dark  transition`}
      title={title}
    >
      {children}
    </button>
  );
};

export default RoundedBtn;
