import React from "react";
import CarouselButton from "../atoms/btnAtoms/CarouselButton";

interface Slide {
  src: string;
  label: string;
  description: string;
}

interface ContainerProps {
  slides: Slide[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

const CarouselIndicatorList: React.FC<ContainerProps> = ({ slides, currentSlide, goToSlide }) => (
  <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center p-0">
    {slides.map((_, index) => (
      <CarouselButton
        key={index}
        action={() => goToSlide(index)} // Asegúrate de que esto sea una función
        isActive={currentSlide === index}
        label={`Slide ${index + 1}`}
      />
    ))}
  </div>
);

export default CarouselIndicatorList;
