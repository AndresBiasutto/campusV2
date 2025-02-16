import React from "react";
import { LuBookmarkPlus } from "react-icons/lu";
import Btn from "../../layouts/Btn";

interface addChapterProps {}

const AddChapterBtn: React.FC<addChapterProps> = () => {
  const createCourseHanldler = () => {
    return alert("ya bro");
  };
  return (
    <Btn
      children={ <LuBookmarkPlus />}
      title={"agregar capitulo"}
      action={createCourseHanldler}
    />
  );
};

export default AddChapterBtn;
