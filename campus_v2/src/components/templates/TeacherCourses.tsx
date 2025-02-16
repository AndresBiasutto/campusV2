import React from "react";
import Section from "../../layouts/Section";
import NavigationLink from "../atoms/NavigationLink";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { LuBookPlus } from "react-icons/lu";
import CourseCardOrg from "../organisms/CourseCardOrg";
import TemplateHeader from "../molecules/TemplateHeader";

interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  Theme: { name: string };
}

const TeacherCourses: React.FC = () => {
  const { auth } = useSelector((state: RootState) => state);
  const storedCourses: Course[] = auth?.createdCourses || [];
  return (
    <Section bgColor="primary">
      <TemplateHeader
        title="Mis curos"
        text="Acá vas a poder agregar tus cursos y modificarlos"
        buttons={[
          <NavigationLink
            text="Crear curso"
            pathName="¡Crear nuevo curso!"
            path="/teach/createcourse"
            icon={<LuBookPlus />}
          />,
        ]}
      />
      {storedCourses.map((course) => (
        <CourseCardOrg course={course} />
      ))}
    </Section>
  );
};

export default TeacherCourses;
