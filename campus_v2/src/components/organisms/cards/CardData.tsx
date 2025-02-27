import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import H3Text from "../../atoms/textAtoms/H3Text";

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
      <H3Text text={name} />
      <p className=" text-base text-start">{description}</p>
    </div>
  );
};

export default CardData;
