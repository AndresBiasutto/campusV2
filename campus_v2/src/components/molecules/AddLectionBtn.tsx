import { LuBookmarkPlus } from "react-icons/lu";
import Btn from "../atoms/btnAtoms/Btn";
interface addChapterProps {
  onClose: () => void;

}

const AddLectionBtn: React.FC<addChapterProps> = ({onClose}) => {
  const createLectionHanldler = () => {
    onClose()
  };
  return (
    <div className="">
      <Btn
        children={<LuBookmarkPlus />}
        title={"agregar lección"}
        action={createLectionHanldler}
      />

    </div>
  );
};

export default AddLectionBtn;
