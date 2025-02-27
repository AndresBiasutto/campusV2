import React from "react";

interface h2TextProps {
  text: string;
}

const H2Text: React.FC<h2TextProps> = ({ text }) => {
  return (
    <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-light-accent to-light-text dark:from-dark-accent dark:to-dark-text">
      {text}
    </h2>
  );
};

export default H2Text;