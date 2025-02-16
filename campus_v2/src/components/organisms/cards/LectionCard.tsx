import React from 'react'
import RoundedBtn from '../../../layouts/RoundedBtn'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { TiDocumentDelete } from 'react-icons/ti'

const LectionCard: React.FC= () => {
  return (
    <div className="w-full flex flex-row justify-between items-center  rounded-lg bg-light-secondary dark:bg-dark-secondary p-2 gap-2">
    <div className="flex flex-row items-center justify-start gap-2">
      <p className="w-10 font-thin h-full flex items-center justify-center">
        1-A
      </p>
      <h4>titulo de la primer lección</h4>
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
  )
}

export default LectionCard