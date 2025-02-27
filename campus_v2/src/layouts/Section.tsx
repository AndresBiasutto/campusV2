import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode; // Acepta cualquier contenido React válido (nodos).
  bgColor?: "primary" | "accent" | "secondary" | "";
}

const Section: React.FC<SectionProps> = ({ children, bgColor }) => {
  return (
    <div className={`bg-light-${bgColor} dark:bg-dark-${bgColor} w-full h-full overflow-hidden flex flex-col justify-start items-center gap-4 p-2 mt-4 rounded-tl-lg rounded-br-lg`}>
      {children}
    </div>
  );
};

export default Section;
