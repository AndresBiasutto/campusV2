import React from "react";
import RoundedBtn from "../../atoms/btnAtoms/RoundedBtn";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { TiDocumentDelete } from "react-icons/ti";

interface lectionCardParams {
  lectionOrder?: number;
  name: string;
  text: string;
  chapterOrder?: number;
}

const LectionCard: React.FC<lectionCardParams> = ({
  lectionOrder,
  name,
  text,
  chapterOrder,
}) => {
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
          action={() => alert("editar leccion")}
        />

        <RoundedBtn
          bgColor={"redBtn"}
          children={<TiDocumentDelete />}
          title={"eliminar lección"}
          action={() => alert("borrar leccion")}
        />
      </div>
    </div>
  );
};

export default LectionCard;
