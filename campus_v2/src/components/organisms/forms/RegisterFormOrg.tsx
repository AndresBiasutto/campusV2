import React, { useEffect, useRef, useState } from "react";
import FormInput from "../../atoms/FormInput";
import FormSubmitBtn from "../../atoms/FormSubmitBtn";
import FormErrorMsg from "../../atoms/FormErrorMsg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { register } from "../../../redux/actions/authActions";
import FormSelect from "../../atoms/FormSelect";

const RegisterFormOrg: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLSelectElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [errMsg, setErrMsg] = useState<{ [key: string]: string }>({});
  const [regMsg, setRegMsg] = useState<string>("");
  const [isWaiting, setIsWaiting] = useState(false)

  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const validateName = (value: string) => {
    return value.length > 2
      ? ""
      : "El nombre debe tener al menos 3 caracteres.";
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Correo electrónico inválido.";
  };

  const validatePassword = (value: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(value)
      ? ""
      : "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.";
  };

  const validateRole = (value: string) => {
    return value ? "" : "Debes seleccionar un rol.";
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const roleError = validateRole(role);

    if (nameError || emailError || passwordError || roleError) {
      setErrMsg({
        name: nameError,
        email: emailError,
        password: passwordError,
        role: roleError,
      });
      return;
    }

    const newUser = {
      name: name,
      e_mail: email,
      password: password,
      roles: role,
    };

    dispatch(register(newUser));
    setIsWaiting(!isWaiting)
    setRegMsg("Registro exitoso, verifica tu correo para activar tu cuenta");
    setTimeout(() => {
      setRegMsg("");
    }, 3000);
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
      <FormInput
        type="text"
        placeholder="nombre"
        id="name"
        state={name}
        refference={nameRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setName(value);
          setErrMsg((prev) => ({ ...prev, name: validateName(value) }));
        }}
      />
      <FormErrorMsg errMsg={errMsg.name} errRef={undefined} />

      <FormInput
        type="text"
        placeholder="email"
        id="email"
        state={email}
        refference={emailRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setEmail(value);
          setErrMsg((prev) => ({ ...prev, email: validateEmail(value) }));
        }}
      />
      <FormErrorMsg errMsg={errMsg.email} errRef={undefined} />

      <FormInput
        type="text"
        placeholder="password"
        id="password"
        state={password}
        refference={passwordRef}
        setState={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setPassword(value);
          setErrMsg((prev) => ({ ...prev, password: validatePassword(value) }));
        }}
      />
      <FormErrorMsg errMsg={errMsg.password} errRef={undefined} />
      <FormSelect
        id="role"
        value={role}
        onChange={(e) => {
          const value = e.target.value;
          setRole(value);
          setErrMsg((prev) => ({ ...prev, role: validateRole(value) }));
        }}
        options={[
          { value: "2", label: "Enseñar" },
          { value: "3", label: "Aprender" },
        ]}
        refference={roleRef}
        placeholder="¿Qué quieres hacer?"
        required
      />
      <FormErrorMsg errMsg={errMsg.role} errRef={undefined} />

      <p aria-live="assertive">{regMsg}</p>
      <FormSubmitBtn Submit={handleRegister} text={"ingresar"} isLoading={isWaiting} />
    </form>
  );
};

export default RegisterFormOrg;
