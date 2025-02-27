import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import RoundedBtn from "./btnAtoms/RoundedBtn";
import React from "react";

interface ContainerProps {
  direction: string;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CarouselArrow: React.FC<ContainerProps> = ({ direction, action }) => (
  <RoundedBtn action={action} title={direction} bgColor={"primary"}>
    <span className=" h-8 w-8 flex justify-center items-center text-light-text dark:text-dark-text">
      {direction === "left" ? (
        <SlArrowLeft className=" " />
      ) : (
        <SlArrowRight className=" " />
      )}
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      {direction}
    </span>
  </RoundedBtn>
);

export default CarouselArrow;
