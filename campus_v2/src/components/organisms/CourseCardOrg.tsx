import React from "react";
import CardImage from "../atoms/CardImage";
import CardCreatorInfo from "../molecules/CardCreatorInfo";
import CardData from "./cards/CardData";
import { Link } from "react-router-dom";
import RoundedBtn from "../../layouts/RoundedBtn";
import { LuBookX } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";

interface courseCardProps {
  course: {
    id: string;
    name: string;
    description: string;
    image: string;
    Theme: { name: string };
  };
}

const CourseCardOrg: React.FC<courseCardProps> = ({ course }) => {
  return (
    <div className=" group relative max-w-sm w-full lg:max-w-full lg:flex rounded-tl-lg rounded-br-lg border-2 border-light-border dark:border-dark-border overflow-hidden md:hover:shadow-light md:dark:hover:shadow-dark transition">
      <CardImage image={course.image} name={course.name} />
      <Link
        to={`/teach/createcourse/addmodulesandchapters/${course.id}`}
        className="  bg-light-secondary dark:bg-dark-secondary p-4 flex flex-col justify-between leading-normal w-full"
      >
        <CardData
          name={course.name}
          description={course.description}
          themeName={course.Theme.name}
        />
        <CardCreatorInfo name={course.name} image={course.image} />
      </Link>
      <div className="group-hover:right-0 p-4 transition-all absolute -right-14 top-0 h-full w-14 flex flex-col items-center justify-between">
        <RoundedBtn bgColor="primary" title={"eliminar curso"} action={() => alert("ya bro...")}>
          <LuBookX />
        </RoundedBtn>
        <p className=" text-2xl text-center w-full flex items-center justify-center">
          <FaAngleRight />
        </p>
      </div>
    </div>
  );
};

export default CourseCardOrg;
