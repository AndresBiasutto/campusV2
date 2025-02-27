import React, { useEffect } from "react";
import Section from "../../layouts/Section";
import NavigationLink from "../atoms/NavigationLink";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { LuBookPlus } from "react-icons/lu";
import CourseCardOrg from "../organisms/CourseCardOrg";
import TemplateHeader from "../molecules/TemplateHeader";
import { getMyCourses } from "../../redux/actions/courseActions";

interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  Theme: { name: string };
}

const TeacherCourses: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { id } = useSelector((state: RootState) => state.auth);
  const { course } = useSelector((state: RootState) => state);
  const storedCourses: Course[] = course.courses;


  useEffect(() => {
    if (id) {
      dispatch(getMyCourses(id));
    }  
  }, [])
  
  return (
    <Section bgColor="">
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
      {storedCourses.map((course, i) => (
        <CourseCardOrg key={i} course={course} />
      ))}
    </Section>
  );
};

export default TeacherCourses;
