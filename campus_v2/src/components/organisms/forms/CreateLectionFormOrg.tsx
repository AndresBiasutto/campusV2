import FormSubmitBtn from "../../atoms/FormSubmitBtn";
import { RiVideoUploadLine } from "react-icons/ri";

import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { CreateLection, GetCreatedCourse } from "../../../redux/actions/courseActions";
import FormInputAndErrorMsg from "../../molecules/FormInputAndErrorMsg";
import Section from "../../../layouts/Section";
import FormErrorMsg from "../../atoms/FormErrorMsg";
import { validateName } from "../../../utils/validations/CreateCourseValidations";
import FormTextAreaAndErrorMsg from "../../molecules/FormTextAreaAndErrorMsg";

interface Lection {
  id: string;
  name: string;
  chapterId: string;
  text: string;
  video: string;
  lectionOrder: number;
}
interface FormData {
  name: string;
  video: string;
  text: string;
  chapterId: string;
  id: string;
  lectionOrder: number;
}

interface lectionFormProps {
  chapterId: string;
}

const CreateLectionFormOrg: React.FC<lectionFormProps> = ({ chapterId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { courseId } = useParams<{ courseId: string }>();

  const nameRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    video: "",
    text: "",
    chapterId: "",
    id: "",
    lectionOrder: 0,
  });
  const [errMsg, setErrMsg] = useState<{ [key: string]: string }>({});
  const [isWaiting, setIsWaiting] = useState(false);
  const [creationMsg, setCreationMsg] = useState("");

  // const chapters = useSelector((state: RootState) => state.course.chapters);

  useEffect(() => {
    console.log(chapterId);
    if (courseId) {
      dispatch(GetCreatedCourse(courseId));
    }
  }, [dispatch, courseId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrMsg((prev) => ({ ...prev, [id]: validateField(id, value) }));
  };

  const validateField = (field: string, value: string) => {
    return field === "name" ? validateName(value) : "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsWaiting(true);
  
    const errors = { name: validateName(formData.name) };
    if (Object.values(errors).some(Boolean)) {
      setErrMsg(errors);
      setIsWaiting(false);
      return;
    }
  
    const newLection: Lection = {
      id: "",
      name: formData.name,
      chapterId: chapterId || "",
      text: formData.text,
      video: formData.video,
      lectionOrder: 0
    };

  
   await dispatch(CreateLection(newLection));
   await dispatch(GetCreatedCourse(courseId || "")); // Refresca la lista de capítulos
  
    setIsWaiting(false);
    setCreationMsg("Lección creada correctamente");
    setTimeout(() => {
      setCreationMsg("");
      setFormData({
        name: "",
        video: "",
        text: "",
        chapterId: "",
        id: "",
        lectionOrder: 0 
      });
    }, 2000);
  };
  return (
    <Section bgColor="primary">
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormInputAndErrorMsg
          nameRef={nameRef}
          changeName={handleChange}
          name={formData.name}
          errMsg={errMsg.name}
          type="text"
          placeholder="Nombre del capítulo"
          id="name"
        />
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-light-background dark:bg-dark-background dark:hover:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <RiVideoUploadLine className=" text-3xl" />

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click para elejir video</span> o
                arrastra y suelta aquí
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                MP4, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <FormTextAreaAndErrorMsg
          placeholder={
            "Cuenta de qué se trata el video, ¡escribí todo lo que quieras!"
          }
          setState={handleChange}
          id="text"
          state={formData.text}
          errMsg={""}
          refference={textRef}
          errRef={undefined}
        />
        <div className="w-full grid grid-cols-1 gap-2">
          <FormSubmitBtn
            Submit={handleSubmit}
            text="Crear lección"
            isLoading={isWaiting}
          />
        </div>
        <FormErrorMsg errMsg={errMsg.err} errRef={undefined} />
        <p aria-live="assertive">{creationMsg}</p>
      </form>
    </Section>
  );
};

export default CreateLectionFormOrg;
