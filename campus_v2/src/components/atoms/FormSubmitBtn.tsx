import React from "react";

interface FormSubmitProps {
  Submit: any;
  text: string;
  isLoading: boolean;
  // errMsg: { [key: string]: string; }
}

const FormSubmitBtn: React.FC<FormSubmitProps> = ({
  Submit,
  text,
  isLoading,
}) => {
  return (
    <button
      className={
        "transform w-full flex flex-row items-center justify-between p-2 font-bold duration-300 bg-light-accent dark:bg-dark-accent hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-tl-lg rounded-br-lg"
      }
      onClick={Submit}
    >
      {text}

      {isLoading && (
        <div
          className="w-5 h-5 flex items-center justify-center rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"
        ></div>
      )}
    </button>
  );
};

export default FormSubmitBtn;
