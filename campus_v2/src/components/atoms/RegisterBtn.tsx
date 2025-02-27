import { ReactNode } from "react";
import LinkBtn from "./btnAtoms/LinkBtn";
import { IoPersonAddOutline } from "react-icons/io5";

interface ContainerProps {
  btnName: string;
  icon: ReactNode;
  bgColor: string;
  linkTo: string;
  action: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
const RegisterBtn: React.FC<ContainerProps> = ({action, btnName, icon, bgColor, linkTo}) => {
  return (
    <LinkBtn
      btnName={btnName}
      icon={icon}
      bgColor={bgColor}
      linkTo={linkTo}
      action={ action}
    />
  );
};

export default RegisterBtn;
