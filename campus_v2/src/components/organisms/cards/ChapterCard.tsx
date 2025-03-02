import React, { useState } from "react";
import ChapterCardBody from "../../molecules/ChapterCardBody";
import ChapterCardButtons from "../../molecules/ChapterCardButtons";
import Modal from "../../molecules/Modal";
import RoundedBtn from "../../atoms/btnAtoms/RoundedBtn";
import PTextT from "../../atoms/textAtoms/Ptext";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/reducers";
import { deleteChapter, getMyCourses } from "../../../redux/actions/courseActions";

interface ChapterCardProps {
  name?: string;
  chapterOrder?: number;
  lections?: { id: string; name: string; lectionOrder: number; text: string }[];
  chapterId?: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({
  name,
  chapterOrder,
  lections,
  chapterId
}) => {
  const [toggle, settoggle] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { id: userId } = useSelector((state: RootState) => state.auth);
    const handleDelete = async () => {
      if (!chapterId) return;
  
      dispatch(await deleteChapter(chapterId)); // Esperar la eliminación
      dispatch(await getMyCourses(userId || ""));
  
      setTimeout(() => {
        settoggle(!toggle);
      }, 3000);
    };

  const handleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <div className="w-full h-auto bg-light-secondary dark:bg-dark-secondary dark:bg-dark-secondaryw-full overflow-hidden flex flex-col md:flex-row justify-start items-center mt-2 gap-4 p-2  rounded-tl-lg rounded-br-lg transition-all">
      <p className=" w-full md:w-10 font-bold text-4xl h-full flex items-start justify-start md:justify-center">
        {chapterOrder}
      </p>
      <ChapterCardBody
        toggle={showCard}
        name={name || "Default Name"}
        lections={lections}
        chapterOrder={chapterOrder}
        chapterId={chapterId}
      />
      <ChapterCardButtons toggle={toggle} handleAction={handleToggle} showCard={showCard} setShowCard={ ()=> setShowCard(!showCard) } />
      <Modal title="¿Estás seguro?" isOpen={toggle} onClose={handleToggle} >
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
              action={handleToggle}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChapterCard;
