import MenuBtn from "../atoms/MenuBtn";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../hooks/UseOutsideClick";
import logo from "../../assets/img/campusLogo.svg";
import ImgLogo from "../atoms/ImgLogo";
import NavBtns from "../molecules/NavBtns";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const NavOrg = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const [show, setShow] = useState(false);
  const [isAutenticated, setIsAutenticated] = useState(false);
  const navRef = useRef(null);
  useOutsideClick(navRef, () => setShow(false));
  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    setIsAutenticated(token ? true : false);
  }, [token]);

  return (
    <div className="relative md:static h-full w-full md:w-5/6 lg:w-4/6 flex flex-row justify-between items-center">
      <ImgLogo logo={logo} toLink={"/"} />
      <MenuBtn toggle={handleToggle} show={show} />
      <NavBtns auth={isAutenticated} navRef={navRef} show={show} />
    </div>
  );
};

export default NavOrg;
