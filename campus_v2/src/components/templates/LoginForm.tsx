import React from "react";
import LoginFormOrg from "../organisms/forms/LoginFormOrg";
import FormHeader from "../molecules/FormHeader";
import FormFooter from "../molecules/FormFooter";
import logo from "../../assets/img/campusLogo.svg";
import FormSection from "../../layouts/FormSection";

const LoginForm: React.FC = () => {
  return (
    <FormSection bgColor={"primary"}>
      <FormHeader title={"Login"} image={logo} path="" />
      <LoginFormOrg />
      <FormFooter
        legend={"¿No tienes una cuenta?"}
        linkTo={"/register"}
        btnName={"Regístrate"}
      />
    </FormSection>
  );
};

export default LoginForm;
