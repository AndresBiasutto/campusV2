import FormSubmitBtn from "../../atoms/FormSubmitBtn";
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

import FormInputAndErrorMsg from "../../molecules/FormInputAndErrorMsg";
import Section from "../../../layouts/Section";
import FormErrorMsg from "../../atoms/FormErrorMsg";
import { validateName } from "../../../utils/validations/CreateCourseValidations";
import FormTextAreaAndErrorMsg from "../../molecules/FormTextAreaAndErrorMsg";
import UploadVideo from "../../molecules/UploadVideo";
import {Lection} from "../../../interfaces/Lection";
import { lectionFormProps } from "../../../interfaces/Props";
import { createLection, getCreatedCourse } from "../../../redux/actions/courseActions";



const CreateLectionFormOrg: React.FC<lectionFormProps> = ({ chapterId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { courseId } = useParams<{ courseId: string }>();

  const nameRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<Lection>({
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
    if (courseId) {
      dispatch(getCreatedCourse(courseId));
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
  const handleVideoUpload = (videoUrl: string) => {
    setFormData((prev) => ({ ...prev, video: videoUrl }));
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
      lectionOrder: 0,
    };

    await dispatch(createLection( newLection));
    await dispatch(getCreatedCourse(courseId || "")); // Refresca la lista de capítulos

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
        lectionOrder: 0,
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
        <UploadVideo onUpload={handleVideoUpload} />

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
