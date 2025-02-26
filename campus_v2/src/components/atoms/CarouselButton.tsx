interface ContainerProps {
  label: string;
  isActive: boolean;
  action: () => void;}

const CarouselButton: React.FC<ContainerProps> = ({
  action,
  label,
  isActive,
}) => (
  <button
    type="button"
    onClick={action}
    className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-light-accent dark:bg-dark-accent bg-clip-padding p-0 -indent-[999px] opacity-${
      isActive ? "100" : "50"
    } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
    aria-label={`Slide ${label}`}
  />
);

export default CarouselButton;
