interface ContainerProps {
  label: string;
  description: string;
}

const CarouselContent: React.FC<ContainerProps> = ({ label, description }) => (
  <div className=" inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    <h5 className="text-xl">{label}</h5>
    <p>{description}</p>
  </div>
);

export default CarouselContent;
