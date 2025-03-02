import React, { useState } from "react";
import LectionCard from "../organisms/cards/LectionCard";
import AddLectionBtn from "../molecules/AddLectionBtn";
import H4Text from "../atoms/textAtoms/H4Text";
import useOrderedList from "../../hooks/UseOrderList";
import CreateLectionFormOrg from "../organisms/forms/CreateLectionFormOrg";
import Modal from "./Modal";

interface chapterCardBodyParams {
  toggle: boolean;
  name: string;
  lections?: { id: string; name: string; lectionOrder: number; text: string }[];
  chapterOrder?: number;
  chapterId?: string;
}

const ChapterCardBody: React.FC<chapterCardBodyParams> = ({
  toggle,
  name,
  lections,
  chapterOrder,
  chapterId
}) => {
  const orderedLections = useOrderedList(lections ?? [], "lectionOrder");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`relative w-full h-full flex flex-col items-start justify-start`}>
      <H4Text text={name} />
      <div className=" w-full h-full flex flex-col md:flex-row items-start md:items-center justify-start gap-2">
        <div className="flex flex-row items-center justify-start gap-2">
          <span>duración: </span> <p>2m</p>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="flex flex-row justify-start items-center">
            <span>lecciones: </span> <p>9</p>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex flex-col items-center justify-start p-2 gap-2 bg-light-primary dark:bg-dark-primary  transition-all ${
          toggle
            ? "opacity-0 -translate-y-20 hidden"
            : "opacity-100 translate-y-0"
        }`}
      >
        {orderedLections?.map((lection) => (
          <LectionCard
            key={lection.id}
            lectionId={lection.id}
            name={lection.name}
            lectionOrder={lection?.lectionOrder}
            text={lection.text}
            chapterOrder={chapterOrder}
          />
        ))}
        <div
          className={` w-full flex flex-row items-center justify-start mt-2`}
        >
          <AddLectionBtn
            onClose={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} title={"agregar lección"}>
      {<CreateLectionFormOrg chapterId={chapterId || ""} />}
      </Modal>
    </div>
  );
};

export default ChapterCardBody;
