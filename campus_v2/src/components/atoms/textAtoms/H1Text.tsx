import React from "react";

interface h1TextProps {
  text: string;
}

const H1Text: React.FC<h1TextProps> = ({ text }) => {
  return (
    <h1 className="uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-light-accent to-light-text dark:from-dark-accent dark:to-dark-text">
      {text}
    </h1>
  );
};

export default H1Text;
