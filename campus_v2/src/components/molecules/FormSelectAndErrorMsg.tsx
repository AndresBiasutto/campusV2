import React from "react";
import FormSelect from "../atoms/FormSelect";
import FormErrorMsg from "../atoms/FormErrorMsg";

interface FormSelectAndErrorMsgProps {
  id: string;
  optionValue: string;
  onOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  optionRef: React.RefObject<HTMLSelectElement>;
  errMsg: string;
  allOptions: { value: string; label: string }[];
  placeholder: string;
}

const FormSelectAndErrorMsg: React.FC<FormSelectAndErrorMsgProps> = ({
  id,
  optionValue,
  placeholder,
  onOptionChange,
  optionRef,
  errMsg,
  allOptions,
}) => {
  return (
    <div>
      <FormSelect
        id={id}
        value={optionValue}
        onChange={onOptionChange}
        options={allOptions}
        refference={optionRef}
        placeholder={placeholder}
        required
      />

      <FormErrorMsg errMsg={errMsg} errRef={optionRef} />
    </div>
  );
};

export default FormSelectAndErrorMsg;
