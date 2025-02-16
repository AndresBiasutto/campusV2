import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  title: string;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Btn: React.FC<ContainerProps> = ({ children, action, title }) => {
  return (
    <button
      onClick={action}
      className={`group w-full p-2 rounded-tl-lg rounded-br-lg flex items-center justify-center gap-2 bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border md:hover:shadow-light md:dark:hover:shadow-dark  transition`}
      title={title}
    >
     {title} {children}
    </button>
  );
};

export default Btn;
