import React from "react";
import Section from "../../layouts/Section";
import NavigationLink from "../atoms/NavigationLink";
import { LiaBookReaderSolid } from "react-icons/lia";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const DashboardHeader: React.FC = () => {
  const { name } = useSelector((state: RootState) => state.auth);
  return (
    <Section bgColor="secondary">
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-2">
        <p className=" text-light-text dark:text-dark-text flex-nowrap w-full text-start">
          Bienvenido {name}, ¿Qué vas a hacer hoy?
        </p>
        <nav className=" w-full flex flex-col items-end justify-center gap-2">
          <NavigationLink
            pathName={"seguir aprendiendo"}
            path={"#"}
            text={"seguir aprendiendo"}
            icon={<LiaBookReaderSolid />}
          />
          <NavigationLink
            pathName={"enseñar"}
            path={"#"}
            text={"enseñar"}
            icon={<LiaChalkboardTeacherSolid />}
          />
          <NavigationLink
            pathName={"completar mi perfil"}
            path={"#"}
            text={"completar mi perfil"}
            icon={<CgProfile />}
          />
        </nav>
      </div>
    </Section>
  );
};

export default DashboardHeader;
