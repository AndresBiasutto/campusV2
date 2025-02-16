import React from "react";

interface TemplateHeaderProps {
  title: string;
  text: string;
  buttons?: React.ReactNode[];
}

const TemplateHeader: React.FC<TemplateHeaderProps> = ({ title, text, buttons = [] }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-between gap-2 mb-4">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <h2>{title}</h2>
        <p className="italic">{text}</p>
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