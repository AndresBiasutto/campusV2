import CarouselContent from "../atoms/CarouselContent";
import React from "react";

interface Slide {
  src: string;
  label: string;
  description: string;
}

interface CarouselSlideProps {
  slide: Slide;
  isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide, isActive }) => (
  <div
    className={`w-full h-full grid grid-cols-2 gap-1 transition-transform duration-[600ms] ease-in-out ${
      isActive ? "block" : "hidden"
    }`}
  >
    <div className="w-full h-full">
      <img
        src={slide.src}
        className="h-full w-full object-cover"
        alt={slide.label}
      />
    </div>
    <div className="w-full h-full">
      <CarouselContent label={slide.label} description={slide.description} />
    </div>
  </div>
);



export default CarouselSlide;
