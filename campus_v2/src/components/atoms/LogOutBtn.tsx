import LinkBtn from "./btnAtoms/LinkBtn";
import { IoMdLogOut } from "react-icons/io";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const LogOutBtn: React.FC = () => {
const dispatch: AppDispatch = useDispatch<AppDispatch>();  


const handleLogOut = () => {
  dispatch(logout());
  localStorage.clear();  
} 

  return (
    <LinkBtn
      btnName={"salir"}
      icon={<IoMdLogOut />}
      bgColor={"primary"}
      linkTo={"/"}
      action={ handleLogOut}
    />
  );
};


export default LogOutBtn;
