import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  title: string;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bgColor:string;
}
const bgColors: { [key: string]: string } = {
  primary: "bg-light-primary dark:bg-dark-primary",
  secondary: "bg-light-secondary dark:bg-dark-secondary",
  redBtn: "bg-light-redBtn dark:bg-dark-redBtn",
  blueBtn: "bg-light-blueBtn dark:bg-dark-blueBtn",
};

const RoundedBtn: React.FC<ContainerProps> = ({ children, action, title, bgColor }) => {
  return (
    <button
      onClick={action}
      className={`group h-10 w-10 p-2 rounded-full flex items-center justify-center text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border md:hover:shadow-light md:dark:hover:shadow-dark transition-all ${bgColors[bgColor] || "bg-gray-500"}`}
      title={title}
    >
      {children}
    </button>
  );
};
export default RoundedBtn
