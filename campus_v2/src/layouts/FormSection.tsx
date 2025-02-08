import { ReactNode } from "react";

interface FormSectionProps {
  children: ReactNode; // Acepta cualquier contenido React válido (nodos).
  bgColor?: "primary" | "accent" | "secondary";
}

const FormSection: React.FC<FormSectionProps> = ({ children, bgColor }) => {
  return (
    <div className={`bg-light-${bgColor} dark:bg-dark-${bgColor} w-full md:w-8/12 lg:w-6/12 h-full overflow-hidden flex flex-col justify-start items-center gap-16 p-2 mt-4 rounded-tl-lg rounded-br-lg`}>
      {children}
    </div>
  );
};

export default FormSection;