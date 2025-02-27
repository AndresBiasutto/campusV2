import React from "react";
import { LuBookmarkPlus } from "react-icons/lu";
import Btn from "../atoms/btnAtoms/Btn";
import Modal from "./Modal";
interface addChapterProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  modalChildren: React.ReactNode;
}

const AddChapterBtn: React.FC<addChapterProps> = ({isOpen, onClose, title, modalChildren}) => {
  const createCourseHanldler = () => {
    onClose()
  };
  return (
    <div className="">
      <Btn
        children={<LuBookmarkPlus />}
        title={"agregar capitulo"}
        action={createCourseHanldler}
      />
      <Modal isOpen={isOpen} onClose={onClose} title={title}>
        <p>{modalChildren}</p>
      </Modal>
    </div>
  );
};

export default AddChapterBtn;
