import LinkBtn from "../../layouts/LinkBtn";
import { IoMdLogIn } from "react-icons/io";


const LoginBtn: React.FC = () => {
  return (
    <LinkBtn
      btnName={"ingresar"}
      icon={<IoMdLogIn />}
      bgColor={"secondary"}
      linkTo={"/login"}
      action={() => "chau"}
    />
  );
};

export default LoginBtn;
