import React from "react";
import Section from "../../layouts/Section";
import CreateCourseFormOrg from "../organisms/CreateCourseFormOrg";
import TemplateHeader from "../molecules/TemplateHeader";

const CreateCourseForm: React.FC = () => {
  return (
    <Section bgColor="primary">
      <TemplateHeader title="Crear nuevo curso" text="Completar información básica sobre la materia" />
      <CreateCourseFormOrg />
    </Section>
  );
};

export default CreateCourseForm;
