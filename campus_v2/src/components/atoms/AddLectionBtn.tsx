import React from "react";
import { TiDocumentAdd } from "react-icons/ti";
import Btn from "../../layouts/Btn";

interface addChapterProps {}

const AddLectionBtn: React.FC<addChapterProps> = () => {
  const createCourseHanldler = () => {
    return alert("ya bro");
  };
  return (
    <Btn
      children={ <TiDocumentAdd />}
      title={"agregar lección"}
      action={createCourseHanldler}
    />
  );
};

export default AddLectionBtn;
