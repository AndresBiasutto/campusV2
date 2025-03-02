import React, { useState } from "react";
import RoundedBtn from "../../atoms/btnAtoms/RoundedBtn";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { TiDocumentDelete } from "react-icons/ti";
import Modal from "../../molecules/Modal";
import PTextT from "../../atoms/textAtoms/Ptext";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLection,
  getMyCourses,
} from "../../../redux/actions/courseActions";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/reducers";

interface lectionCardParams {
  lectionOrder?: number;
  name: string;
  text: string;
  chapterOrder?: number;
  lectionId?: string;
}

const LectionCard: React.FC<lectionCardParams> = ({
  lectionOrder,
  name,
  // text,
  chapterOrder,
  lectionId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id: userId } = useSelector((state: RootState) => state.auth);

  const [showModal, setshowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    if (!lectionId) return;

    dispatch(await deleteLection(lectionId)); // Esperar la eliminación
    dispatch(await getMyCourses(userId || ""));

    setTimeout(() => {
      setIsDeleted(!isDeleted);
      setshowModal(!showModal);
    }, 3000);
  };

  const handleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <div className="w-full flex flex-row justify-between items-center  rounded-lg bg-light-secondary dark:bg-dark-secondary p-2 gap-2">
      <div className="flex flex-row items-center justify-start gap-2">
        <p className="w-10 font-thin h-full flex items-center justify-center">
          {chapterOrder}-{lectionOrder}
        </p>
        <h4>{name}</h4>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <RoundedBtn
          bgColor={"blueBtn"}
          children={<HiOutlinePencilAlt />}
          title={"editar lección"}
          action={() => alert("borrar leccion")}
        />

        <RoundedBtn
          bgColor={"redBtn"}
          children={<TiDocumentDelete />}
          title={"eliminar lección"}
          action={handleModal}
        />
      </div>
      <Modal
        title={
          isDeleted
            ? "La lección fue eliminada."
            : "¿Realmente deseas eliminar esta lección?"
        }
        isOpen={showModal}
        onClose={handleModal}
      >
        <div>
          <PTextT text="todos los dátos de esta lección serán eliminados permanentemente." />
          <div className="flex flex-row justify-center gap-2">
            <RoundedBtn
              bgColor={"blueBtn"}
              children={"Si"}
              title={"Si"}
              action={handleDelete}
            />
            <RoundedBtn
              bgColor={"redBtn"}
              children={"No"}
              title={"No"}
              action={handleModal}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LectionCard;
