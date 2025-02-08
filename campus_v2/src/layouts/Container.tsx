import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; // Acepta cualquier contenido React válido (nodos).
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-full w-full pl-20 pr-4 md:pl-16 md:w-5/6 mt-16 md:mt-10 flex flex-col items-center justify-start gap-4">
      {children}
    </div>
  );
};

export default Container;
