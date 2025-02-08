import React, { useEffect, useRef, useState } from "react";
import FormErrorMsg from "../atoms/FormErrorMsg";
import ImgInputAndAvatar from "../molecules/ImgInputAndAvatar";
import axios from "../../api/axios";
import {
  validateName,
  validateDescription,
  validateTheme,
} from "../../utils/validations/CreateCourseValidations";
import FormInputAndErrorMsg from "../molecules/FormInputAndErrorMsg";
import FormTextAreaAndErrorMsg from "../molecules/FormTextAreaAndErrorMsg";
import { RootState } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { GetThemes } from "../../redux/actions/themeActions";
import { AppDispatch } from "../../redux/store";
import { CreateCourse } from "../../redux/actions/courseActions";
import FormSubmitBtn from "../atoms/FormSubmitBtn";
import { useNavigate } from "react-router-dom";
import FormSelectAndErrorMsg from "../molecules/FormSelectAndErrorMsg";

const CreateCourseFormOrg: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { name: courseName } = useSelector((state: RootState) => state.course);
  const { Themes } = useSelector((state: RootState) => state.courseTheme);
  const { id } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [errMsg, setErrMsg] = useState<{ [key: string]: string }>({});
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [creationMsg, setCreationMsg] = useState<string>("");

  useEffect(() => {
    dispatch(GetThemes());
  }, []);
  useEffect(() => {
    console.log("courseName ", courseName);
    setIsWaiting(false);
    if (creationMsg) {
      setIsWaiting(false);
    }
  }, [courseName, isWaiting, creationMsg]);
  useEffect(() => {
    console.log("isWaiting ", isWaiting);
  }, [isWaiting]);

  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvpchtyzq/image/upload",
        formData,
        { withCredentials: false }
      );
      setImageUrl(res.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setErrMsg((prev) => ({ ...prev, name: validateName(value) }));
  };

  const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDescription(value);
    setErrMsg((prev) => ({ ...prev, description: validateDescription(value) }));
  };

  const changeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTheme(value);
    setErrMsg((prev) => ({ ...prev, theme: validateTheme(value) }));
  };

  const themeOptions = (Themes: any[]) => {
    return Themes.map((theme) => ({
      value: theme.id,
      label: theme.name,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsWaiting(true);

    const nameError = validateName(name);
    const descriptionError = validateDescription(description);
    const themeError = validateTheme(theme);

    if (nameError || descriptionError || themeError) {
      setErrMsg({
        name: nameError,
        theme: themeError,
        description: descriptionError,
      });
      // setIsWaiting(false); // Si hay errores, desactivar el estado de carga
      return;
    }

    const newCourse = {
      id: "",
      name,
      description,
      image: imageUrl,
      themeId: theme,
      creatorId: id || "",
      // Theme: {},
      // Creator: {},
    };

    dispatch(CreateCourse(newCourse));
    setCreationMsg("Curso creado con éxito");
    setTimeout(() => {
      setCreationMsg("");
      setName("");
      setImageUrl("");
      setDescription("");
      setTheme("");
      setIsWaiting(false); // Resetear estado de carga
      navigate("/teach/createcourse/addmodulesandchapters");
    }, 3000);
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
      <FormInputAndErrorMsg
        nameRef={nameRef}
        changeName={changeName}
        name={name}
        errMsg={errMsg.name}
        type={"text"}
        placeholder={"nombre del curso"}
        id={"name"}
      />
      <FormTextAreaAndErrorMsg
        placeholder={"Breve descripción sobre lo que deseas enseñar"}
        id={"description"}
        state={description}
        errMsg={errMsg.description}
        errRef={descriptionRef}
        refference={descriptionRef}
        setState={changeDescription}
      />

      <div className="w-full grid grid-cols-none grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-2">
        <FormSelectAndErrorMsg
          id={"theme"}
          optionValue={theme}
          onOptionChange={changeTheme}
          allOptions={themeOptions(Themes)}
          optionRef={themeRef}
          placeholder={"Tema"}
          errMsg={errMsg.theme}
        />
        <ImgInputAndAvatar uploadImage={changeImage} image={imageUrl} />
      </div>
      <div className="w-full grid grid-cols-2 gap-2">
        <div></div>
        <FormSubmitBtn
          Submit={handleRegister}
          text={"Crear curso"}
          isLoading={isWaiting}
          // errMsg={errMsg}
        />
      </div>
      <FormErrorMsg errMsg={errMsg.err} errRef={undefined} />
      <p aria-live="assertive">{creationMsg}</p>
    </form>
  );
};

export default CreateCourseFormOrg;
