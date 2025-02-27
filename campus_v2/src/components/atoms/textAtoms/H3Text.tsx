import React from "react";

interface h3TextProps {
  text: string;
}

const H3Text: React.FC<h3TextProps> = ({ text }) => {
  return (
    <h3 className=" uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-light-accent to-light-text dark:from-dark-accent dark:to-dark-text">
      {text}
    </h3>
  );
};

export default H3Text;