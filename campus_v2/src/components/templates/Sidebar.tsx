import React from "react";
import SidebarOrg from "../organisms/SidebarOrg";
import FormHeader from "../molecules/FormHeader";
import logo from "../../assets/img/campusLogo.svg";
import { FaArrowRight } from "react-icons/fa";

import Icon from "../atoms/Icon";

const Sidebar: React.FC = () => {
  const [show, setShow] = React.useState(false);

  const showSidebar = () => {
    setShow(!show);
  };
  return (
    <div
      className={`z-40 transition-all duration-100 fixed ${show? "left-0": " -left-36 md:-left-40"} top-0  h-screen w-52 flex flex-col justify-end items-center bg-light-secondary dark:bg-dark-secondary border-2 border-y-light-secondary dark:border-y-dark-secondary border-r-light-border dark:border-r-dark-border py-4`}
    >
      <button onClick={showSidebar} className="absolute top-3 -right-4">
        <Icon toggle={show} icon={<FaArrowRight/>} />
        {/* <FaArrowAltCircleRight className={`text-4xl text-light-text dark:text-dark-text ${show && "rotate-180"}`} /> */}
      </button>
      <FormHeader image={logo} title="" path="dashboard" />
      <SidebarOrg />
    </div>
  );
};

export default Sidebar;
