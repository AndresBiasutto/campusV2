import React from "react";
import FormInput from "../atoms/FormInput";
import FormErrorMsg from "../atoms/FormErrorMsg";

interface FormInputAndErrorMsgProps {
  name: string;
  nameRef: React.RefObject<HTMLInputElement>;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errMsg:  string;
  type: string;
  placeholder: string;
    id: string;
}

const FormInputAndErrorMsg: React.FC<FormInputAndErrorMsgProps> = ({
  name,
  nameRef,
  changeName,
  errMsg,
  type,
  placeholder,
  id,
}) => {
  return (
    <div>
      <FormInput
        type={type}
        placeholder={placeholder}
        id={id}
        state={name}
        refference={nameRef}
        setState={changeName}
      />
      <FormErrorMsg errMsg={errMsg} errRef={nameRef} />
    </div>
  );
};

export default FormInputAndErrorMsg;
