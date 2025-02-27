import React from "react";
import H2Text from "../atoms/textAtoms/h2Text";
import PTextT from "../atoms/textAtoms/Ptext";

interface TemplateHeaderProps {
  title: string;
  text: string;
  buttons?: React.ReactNode[];
}

const TemplateHeader: React.FC<TemplateHeaderProps> = ({ title, text, buttons = [] }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-between gap-2 mb-4">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <H2Text text={title} />
        <PTextT text={text} />
      </div>
      <div className="w-full flex flex-row items-start justify-start md:justify-end gap-2">
        {buttons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>
    </div>
  );
};

export default TemplateHeader;