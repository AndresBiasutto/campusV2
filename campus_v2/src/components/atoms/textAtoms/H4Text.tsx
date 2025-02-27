import React from "react";

interface h4TextProps {
  text: string;
}

const H4Text: React.FC<h4TextProps> = ({ text }) => {
  return (
    <h4 className=" uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-light-accent to-light-text dark:from-dark-accent dark:to-dark-text">
      {text}
    </h4>
  );
};

export default H4Text;