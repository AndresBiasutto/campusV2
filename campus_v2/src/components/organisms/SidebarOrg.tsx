import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import useOutsideClick from "../../hooks/UseOutsideClick";
import SettingsMenuButton from "../molecules/SettingsMenuBtn";
import NavigationLink from "../atoms/NavigationLink";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";



const SidebarOrg: React.FC = () => {
  const { image } = useSelector((state: RootState) => state.auth);
  const [show, setShow] = React.useState(false);
  const noAvatar =
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png";
  const navRef = useRef(null);
  useOutsideClick(navRef, () => setShow(false));
  useEffect(() => {}, [image]);
  const showSettingsMenu = () => {
    setShow(!show);
  };
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-end px-2">
      <nav className="flex flex-col w-full gap-2">
        <NavigationLink
          icon={<RxDashboard />}
          text="dashboard"
          path="/dashboard"
          pathName="Dashboard"
        />
        <NavigationLink
          icon={<LiaChalkboardTeacherSolid />}
          text="enseañar"
          path="/teach"
          pathName="enseañar"
        />
        <NavigationLink
          icon={<PiStudent />
          }
          text="aprender"
          path="/#"
          pathName="aprender"
        />
      </nav>
      <SettingsMenuButton
        image={image}
        noAvatar={noAvatar}
        handleClick={showSettingsMenu}
        show={show}
        navRef={navRef}
      />
    </div>
  );
};

export default SidebarOrg;
