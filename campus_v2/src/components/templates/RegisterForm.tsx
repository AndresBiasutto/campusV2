import React from "react";
import FormHeader from "../molecules/FormHeader";
import logo from "../../assets/img/campusLogo.svg";
import FormFooter from "../molecules/FormFooter";
import RegisterFormOrg from "../organisms/RegisterFormOrg";
import FormSection from "../../layouts/FormSection";

const RegisterForm: React.FC = () => {
  return (
    <FormSection bgColor={"secondary"}>
      <FormHeader title={"Registro"} image={logo} path="/register" />
      <RegisterFormOrg />
      <FormFooter
        legend={"¿Ya tienes una cuenta?"}
        linkTo={"/login"}
        btnName={"Inicia sesión"}
      />
    </FormSection>
  );
};

export default RegisterForm;
