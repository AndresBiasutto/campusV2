import React, { useState } from "react";

interface CustomFileInputProps {
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFileSelect: (file: File) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  onFileSelect,
  uploadImage,
}) => {
  const [fileName, setFileName] = useState<string>(
    "Ningún archivo seleccionado"
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      uploadImage(e);
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="flex flex-row md:flex-col items-start gap-2">
      {/* Input oculto */}
      <input
        type="file"
        id="fileUpload"
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />

      {/* Botón personalizado */}
      <div className="flex flex-col md:flex-row items-center justify-start gap-2 pr-2">
      <label
        htmlFor="fileUpload"
        className={` group w-full h-14 md:h-8 pl-2 pr-2 min-w-28 flex flex-row items-center justify-between gap-1 rounded-tl-lg rounded-br-lg bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border font-bold transition md:hover:shadow-light md:dark:hover:shadow-dark cursor-pointer`}
        >
        Subir Imagen
      </label>

      {/* Nombre del archivo seleccionado */}
      <span className="w-full" >{fileName}</span>        
      </div>

    </div>
  );
};

export default CustomFileInput;
