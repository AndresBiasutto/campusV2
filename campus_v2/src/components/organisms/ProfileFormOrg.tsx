import React, { useEffect, useRef, useState } from "react";
import FormInput from "../atoms/FormInput";
import FormSubmitBtn from "../atoms/FormSubmitBtn";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updateUser } from "../../redux/actions/authActions";
import { RootState } from "../../redux/reducers";
import FormErrorMsg from "../atoms/FormErrorMsg";

const ProfileFormOrg: React.FC = () => {
  const { id, token } = useSelector((state: RootState) => state.auth);
  const nameRef = useRef<HTMLInputElement>(null);
  const contactNumberRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const imgageRef = useRef<HTMLInputElement>(null);

  const [actualname, setName] = useState<string>("");
  const [ActualContactNumber, setContactNumber] = useState<string>( "");
  const [ActualDescription, setDescription] = useState<string>( "");
  const [ActualImage, setImage] = useState<string>("");
  const [errMsg, setErrMsg] = useState<{ [key: string]: string }>({});
  const [updateMsg, setUpdateMsg] = useState<string>("");
  const [isWaiting, setIsWaiting] = useState(false);

  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsWaiting(true);

    const updatedUser = {
      name: actualname,
      contactNumber: ActualContactNumber,
      description: ActualDescription,
      image: ActualImage,
    };

    if (id) {
      try {
         dispatch(updateUser(id, updatedUser, token));
        setUpdateMsg("Datos actualizados correctamente");
        setTimeout(() => {
          setUpdateMsg("")
          setName("");
          setImage("");
          setDescription("");
          setContactNumber("");
        }
        , 3000);
      } catch (error) {
        setErrMsg((prev) => ({ ...prev, api: "Error al actualizar datos." }));
      }
    } else {
      setErrMsg((prev) => ({ ...prev, id: "ID de usuario no encontrado." }));
    }
    
    setIsWaiting(false); // Desactivar spinner después de completar
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
      <FormInput
        type="text"
        placeholder="nombre"
        id="name"
        state={actualname}
        refference={nameRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setName(value);
        }}
      />

      <FormInput
        type="tel"
        placeholder="telefono"
        id="contactNumber"
        state={ActualContactNumber}
        refference={contactNumberRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setContactNumber(value);

        }}
      />

      <FormInput
        type="text"
        placeholder="imagen url"
        id="image"
        state={ActualImage}
        refference={imgageRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
        setImage(value);
      }}
      />

      <FormInput
        type="text"
        placeholder="descripción"
        id="description"
        state={ActualDescription}
        refference={descriptionRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <FormErrorMsg errMsg={errMsg.password} errRef={undefined} />
      <p aria-live="assertive">{updateMsg}</p>
      <FormSubmitBtn
        Submit={handleRegister}
        text={"Actualizar"}
        isLoading={isWaiting}
      />
    </form>
  );
};

export default ProfileFormOrg;
