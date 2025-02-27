import { IoLibraryOutline } from "react-icons/io5";
import LinkBtn from "./btnAtoms/LinkBtn";

const ListCoursesBtn: React.FC = () => (
  <LinkBtn
    btnName="Ver todos los cursos"
    icon={<IoLibraryOutline />}
    bgColor="accent"
    linkTo=""
    action={()=> "hola"}
  />
);

export default ListCoursesBtn;
