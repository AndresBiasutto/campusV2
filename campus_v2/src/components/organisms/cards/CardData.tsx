import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";

interface cardDataProps {
  name: string;
  description: string;
  themeName: string;
}

const CardData: React.FC<cardDataProps> = ({
  name,
  description,
  themeName,
}) => {
  return (
    <div className="mb-8">
      <span className="flex items-center gap-2">
        <IoBriefcaseOutline />

        {themeName}
      </span>
      <h3>{name}</h3>
      <p className="text-gray-700 text-base text-start">{description}</p>
    </div>
  );
};

export default CardData;
