import React from 'react'
import RoundedBtn from '../atoms/btnAtoms/RoundedBtn'
import { LuBookmarkMinus } from 'react-icons/lu'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

interface chapterCardButtonsParams{
    handleAction: any;
    setShowCard: any;
    toggle: boolean;
    showCard: boolean;
}

const ChapterCardButtons:React.FC<chapterCardButtonsParams> = ({handleAction , showCard, setShowCard}) => {
  return (
    <div className=" h-full w-full md:w-auto flex flex-row items-end md:items-start justify-end md:justify-start gap-2">
    <RoundedBtn
      bgColor={"redBtn"}
      children={<LuBookmarkMinus />}
      title={"eliminar capitulo"}
      action={handleAction}
    />
    <RoundedBtn
      bgColor={"primary"}
      children={showCard ? <FaAngleDown /> : <FaAngleUp />}
      title={"mostrar lecciones"}
      action={setShowCard}
    />
  </div>
  )
}

export default ChapterCardButtons