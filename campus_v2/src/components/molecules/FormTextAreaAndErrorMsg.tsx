import React from "react";
import FormTextArea from "../atoms/FormTextArea";
import FormErrorMsg from "../atoms/FormErrorMsg";

interface FormTextAreaProps {
  placeholder: string;
  id: string;
  state: string;
  errMsg: string;
  refference: any;
  errRef: any;
  setState: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextAreaAndErrorMsg: React.FC<FormTextAreaProps> = ({
  placeholder,
  id,
  state,
  refference,
  setState,
  errRef,
  errMsg,
}) => {
  return (
    <div>
      <FormTextArea
        placeholder={placeholder}
        id={id}
        state={state}
        refference={refference}
        setState={setState}
      />
      <FormErrorMsg errMsg={errMsg} errRef={errRef} />
    </div>
  );
};

export default FormTextAreaAndErrorMsg;
