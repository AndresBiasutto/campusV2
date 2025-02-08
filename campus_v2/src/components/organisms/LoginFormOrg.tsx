import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/reducers";
import axios from "../../api/axios";
import { loginSuccess } from "../../redux/actions/authActions";
import FormInput from "../atoms/FormInput";
import FormSubmitBtn from "../atoms/FormSubmitBtn";
import FormErrorMsg from "../atoms/FormErrorMsg";

const LoginFormOrg: React.FC = () => {
  const LOGIN_URL = "auth/login";
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);
  const passWordRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);

  const [e_mail, setE_mail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [e_mail, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ e_mail, password }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.message) {
        setErrMsg(response.data.message);
      } else {
        const {
          role,
          name,
          image,
          token,
          id,
          description,
          contactNumber,
          email,
        } = response.data;

        dispatch(
          loginSuccess({
            name,
            role,
            image,
            token,
            id,
            description,
            contactNumber,
            email,
          })
        );

        let redirectPath = "/";
        switch (role) {
          case "admin":
            redirectPath = "/dashboard";
            break;
          case "teacher":
            redirectPath = "/dashboard";
            break;
          case "student":
            redirectPath = "/student";
            break;
          default:
            redirectPath = "/";
            break;
        }
        navigate(redirectPath, { replace: true });
      }
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("Sin respuesta del servidor");
      } else if (err.response?.status === 400) {
        setErrMsg("No se encuentra el correo o la contraseña");
      } else if (err.response?.status === 401) {
        setErrMsg("Sin autorización");
      } else {
        setErrMsg("Login Failed 🤬");
      }
      errRef.current?.focus();
      setIsLoading(false);
    }finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="w-full flex flex-col gap-4">
      <FormInput
        type="text"
        placeholder="E_mail"
        id="e_mail"
        state={e_mail}
        refference={userRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => setE_mail(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Password"
        id="password"
        state={password}
        refference={passWordRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <FormSubmitBtn Submit={handleSubmit} text={"ingresar"} isLoading={isLoading} />
      <FormErrorMsg errRef={errRef} errMsg={errMsg} />
    </form>
  );
};

export default LoginFormOrg;
