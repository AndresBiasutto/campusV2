import React from "react";

interface FormTextAreaProps {
  placeholder: string;
  id: string;
  state: string;
  refference: any;
  setState: any;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  placeholder,
  id,
  state,
  refference,
  setState,
}) => {
  return (
    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-light-accent dark:focus-within:border-dark-accent">
      <textarea
        rows={2}
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none rounded-tl-lg rounded-br-lg text-light-text dark:text-dark-text"
        placeholder={placeholder}
        id={id}
        ref={refference}
        autoComplete="off"
        onChange={setState}
        value={state}
        required
      />
    </div>
  );
};

export default FormTextArea;
