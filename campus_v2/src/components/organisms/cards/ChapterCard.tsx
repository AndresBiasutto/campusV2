import React, { useState } from "react";
import AddLectionBtn from "../../atoms/AddLectionBtn";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import RoundedBtn from "../../../layouts/RoundedBtn";
import LectionCard from "./LectionCard";

const ChapterCard: React.FC = () => {
  const [toggle, settoggle] = useState(true);

  const handleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <div className="w-full h-auto bg-light-secondary dark:bg-dark-secondary dark:bg-dark-secondaryw-full overflow-hidden flex flex-col md:flex-row justify-start items-center mt-2 gap-4 p-2  rounded-tl-lg rounded-br-lg transition-all">
      <p className=" w-full md:w-10 font-bold text-4xl h-full flex items-start justify-start md:justify-center">
        1
      </p>
      <div className={`w-full h-full flex flex-col items-start justify-start`}>
        <h4>titulo del capitulo</h4>
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
            toggle ? "opacity-0 -translate-y-20 hidden" : "opacity-100 translate-y-0"
          }`}
        >
          <LectionCard />
          <LectionCard />
          <div
            className={` w-full flex flex-row items-center justify-start mt-2`}
          >
            <AddLectionBtn />
          </div>
        </div>
      </div>
      <div className=" h-full flex items-start justify-start">
        <RoundedBtn
          bgColor={"primary"}
          children={toggle ? <FaAngleDown /> : <FaAngleUp />}
          title={"mostrar lecciones"}
          action={handleToggle}
        />
      </div>
    </div>
  );
};

export default ChapterCard;
