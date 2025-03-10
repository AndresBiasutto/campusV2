import React from "react";
import CreateCourseDataOrg from "../organisms/CreateCourseDataOrg";
import TemplateHeader from "../molecules/TemplateHeader";
import Section from "../../layouts/Section";
import CreateCourseDetailsOrg from "../organisms/CreateCourseDetailsOrg";

const CreateCourseData: React.FC = () => {
  return (
    <Section bgColor="">
      <TemplateHeader
        title={"AÑADIR CAPITULOS Y LECCIONES"}
        text={
          "Añadir más información."
        }
        buttons={[]}
      />
      <div className="w-full grid grid-rows-[1fr_4fr] md:grid-rows-1 md:grid-cols-[4fr_1fr]">
        <CreateCourseDetailsOrg />
        <CreateCourseDataOrg />
      </div>
    </Section>
  );
};

export default CreateCourseData;
