import FormSubmitBtn from "../../atoms/FormSubmitBtn";

import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {
  CreateChapter,
  GetCreatedCourse,
} from "../../../redux/actions/courseActions";
import FormInputAndErrorMsg from "../../molecules/FormInputAndErrorMsg";
import Section from "../../../layouts/Section";
import FormErrorMsg from "../../atoms/FormErrorMsg";
import { validateName } from "../../../utils/validations/CreateCourseValidations";
import { RootState } from "../../../redux/reducers";

const CreateChapterFormOrg: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { courseId } = useParams<{ courseId: string }>();
  const nameRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({ name: "" });
  const [errMsg, setErrMsg] = useState<{ [key: string]: string }>({});
  const [isWaiting, setIsWaiting] = useState(false);
  const [creationMsg, setCreationMsg] = useState("");

  const chapters = useSelector((state: RootState) => state.course.chapters);

  useEffect(() => {
    if (courseId) {
      dispatch(GetCreatedCourse(courseId));
    }
  }, [dispatch, courseId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const newChapter = {
      id: "",
      name: formData.name,
      courseId: courseId || "",
      lections: [],
      chapterOrder: chapters ? chapters.length + 1 : 1,
    };

    await dispatch(CreateChapter(newChapter));
    await dispatch(GetCreatedCourse(courseId || "")); // Refresca la lista de capítulos

    setIsWaiting(false);
    setCreationMsg("Capítulo creado correctamente");
    setTimeout(() => {
      setCreationMsg(" ");
      setFormData({ name: "" });
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

        <div className="w-full grid grid-cols-1 gap-2">
          <FormSubmitBtn
            Submit={handleSubmit}
            text="Crear capitulo"
            isLoading={isWaiting}
          />
        </div>
        <FormErrorMsg errMsg={errMsg.err} errRef={undefined} />
        <p aria-live="assertive">{creationMsg}</p>
      </form>
    </Section>
  );
};

export default CreateChapterFormOrg;
