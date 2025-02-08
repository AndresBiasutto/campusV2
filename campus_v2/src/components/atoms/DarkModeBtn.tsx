import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions/authActions";
import { FaLightbulb, FaRegLightbulb  } from "react-icons/fa6";

import RoundedBtn from "../../layouts/RoundedBtn";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/reducers";

const DarkModeBtn = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark", !darkMode);
    dispatch(toggleTheme());
  };
  return (
    <RoundedBtn action={handleThemeToggle} title="Toggle Theme">
      {darkMode ? (
        <FaLightbulb className=" md:group-hover:scale-105 text-nowrap md:text-2xl" />
      ) : (
        <FaRegLightbulb className="md:group-hover:scale-105 text-nowrap md:text-2xl" />
      )}
    </RoundedBtn>
  );
};

export default DarkModeBtn;
