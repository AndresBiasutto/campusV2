import React from "react";

interface PTextTProps {
  text: string;
}

const PTextT: React.FC<PTextTProps> = ({ text }) => {
  return (
    <p className="">
      {text}
    </p>
  );
};

export default PTextT;