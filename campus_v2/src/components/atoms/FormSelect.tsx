import React from "react";

interface FormSelectProps {
  id: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  refference?: any;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder = "Seleccione una opción",
  className = "",
  required = false,
  refference
}) => {
  return (
    <div
      className={`w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-light-accent dark:focus-within:border-dark-accent ${className}`}
    >
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border-none bg-transparent outline-none focus:outline-noneplaceholder:italic focus:outline-none rounded-tl-lg rounded-br-lg text-light-text dark:text-dark-text "
        required={required}
        ref={refference}
      >
        <option className=" bg-slate-300 placeholder:italic" value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-light-text dark:text-dark-text bg-light-primary dark:bg-dark-primary">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
