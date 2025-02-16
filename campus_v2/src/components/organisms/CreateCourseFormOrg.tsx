import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/reducers";
import { CreateCourse } from "../../redux/actions/courseActions";
import { GetThemes } from "../../redux/actions/themeActions";
import { validateName, validateDescription, validateTheme } from "../../utils/validations/CreateCourseValidations";
import useImageUpload from "../../hooks/UseImagUpload";
import Section from "../../layouts/Section";
import FormErrorMsg from "../atoms/FormErrorMsg";
import ImgInputAndAvatar from "../molecules/ImgInputAndAvatar";
import FormInputAndErrorMsg from "../molecules/FormInputAndErrorMsg";
import FormTextAreaAndErrorMsg from "../molecules/FormTextAreaAndErrorMsg";
import FormSubmitBtn from "../atoms/FormSubmitBtn";
import FormSelectAndErrorMsg from "../molecules/FormSelectAndErrorMsg";

const CreateCourseFormOrg: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  
  const { id: courseId } = useSelector((state: RootState) => state.course);
  const { Themes } = useSelector((state: RootState) => state.courseTheme);
  const { id } = useSelector((state: RootState) => state.auth);

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    theme: "",
  });
  const [errMsg, setErrMsg] = useState<{ [key: string]: string }>({});
  const [isWaiting, setIsWaiting] = useState(false);
  const [creationMsg, setCreationMsg] = useState("");
  const { imageUrl, changeImage } = useImageUpload();

  useEffect(() => {
    dispatch(GetThemes());
  }, [dispatch]);

  useEffect(() => {
    if (courseId) {
      setTimeout(() => navigate(`/teach/createcourse/addmodulesandchapters/${courseId}`), 3000);
    }
  }, [courseId, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrMsg((prev) => ({ ...prev, [id]: validateField(id, value) }));
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "name": return validateName(value);
      case "description": return validateDescription(value);
      case "theme": return validateTheme(value);
      default: return "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsWaiting(true);

    const errors = {
      name: validateName(formData.name),
      description: validateDescription(formData.description),
      theme: validateTheme(formData.theme),
    };
    
    if (Object.values(errors).some(Boolean)) {
      setErrMsg(errors);
      return;
    }

    const newCourse = {
      id: "",
      ...formData,
      image: imageUrl,
      themeId: formData.theme,
      creatorId: id || "",
      Theme: { name: Themes.find((t) => t.id === formData.theme)?.name || "" },
    };

    dispatch(CreateCourse(newCourse));
    setCreationMsg("Curso creado con éxito");
    setTimeout(() => {
      setCreationMsg("");
      setFormData({ name: "", description: "", theme: "" });
      setIsWaiting(false);
    }, 3000);
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
          placeholder="Nombre del curso"
          id="name"
        />
        <FormTextAreaAndErrorMsg
          placeholder="Breve descripción sobre lo que deseas enseñar"
          id="description"
          state={formData.description}
          errMsg={errMsg.description}
          errRef={descriptionRef}
          refference={descriptionRef}
          setState={handleChange}
        />
        <div className="w-full grid grid-cols-2 gap-2">
          <FormSelectAndErrorMsg
            id="theme"
            optionValue={formData.theme}
            onOptionChange={handleChange}
            allOptions={Themes.map(t => ({ value: t.id, label: t.name }))}
            optionRef={themeRef}
            placeholder="Tema"
            errMsg={errMsg.theme}
          />
          <ImgInputAndAvatar uploadImage={changeImage} image={imageUrl} />
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <div></div>
          <FormSubmitBtn Submit={handleSubmit} text="Crear curso" isLoading={isWaiting} />
        </div>
        <FormErrorMsg errMsg={errMsg.err} errRef={undefined} />
        <p aria-live="assertive">{creationMsg}</p>
      </form>
    </Section>
  );
};

export default CreateCourseFormOrg;
