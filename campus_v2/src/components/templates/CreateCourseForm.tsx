import React from "react";
import Section from "../../layouts/Section";
import CreateCourseFormOrg from "../organisms/CreateCourseFormOrg";

const CreateCourseForm: React.FC = () => {
  return (
    <Section bgColor="primary">
      {/* <h3 className="w-full text-start">Completar información básica sobre la materia</h3> */}
      <CreateCourseFormOrg />
    </Section>
  );
};

export default CreateCourseForm;
