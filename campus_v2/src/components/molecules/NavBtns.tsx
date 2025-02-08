import LoginBtn from "../atoms/LoginBtn";
import DarkModeBtn from "../atoms/DarkModeBtn";
import { LegacyRef } from "react";
import LogOutBtn from "../atoms/LogOutBtn";
import { useLocation } from "react-router-dom";

interface ContainerProps {
  navRef: LegacyRef<HTMLElement>;
  show: boolean;
  auth: boolean;
}

const NavBtns: React.FC<ContainerProps> = ({ navRef, auth, show }) => {
  const location = useLocation();

  return (
    <nav
      ref={navRef}
      className={`w-full md:w-auto absolute top-14 ${
        show ? "right-0" : "right-full"
      } transition-all p-2 md:p-0 right-0 md:static flex flex-col md:flex-row justify-end items-end md:items-center gap-2 bg-light-primary dark:bg-dark-primary`}
    >
      <DarkModeBtn />
      {location.pathname !== "/login" && location.pathname !== "/" && auth ? (
        <LogOutBtn />
      ) : (
        <LoginBtn />
      )}
    </nav>
  );
};

export default NavBtns;
