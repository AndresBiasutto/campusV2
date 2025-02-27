import React from 'react'
import RoundedBtn from '../atoms/btnAtoms/RoundedBtn'
import { LuBookmarkMinus } from 'react-icons/lu'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

interface chapterCardButtonsParams{
    handleAction: any;
    toggle: boolean;
}

const ChapterCardButtons:React.FC<chapterCardButtonsParams> = ({handleAction, toggle}) => {
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
      children={toggle ? <FaAngleDown /> : <FaAngleUp />}
      title={"mostrar lecciones"}
      action={handleAction}
    />
  </div>
  )
}

export default ChapterCardButtons