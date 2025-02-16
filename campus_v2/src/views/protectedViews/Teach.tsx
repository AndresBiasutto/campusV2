import React, { useEffect, useState } from "react";
import Container from "../../layouts/Container";
import { RootState } from "../../redux/reducers";
import { useSelector } from "react-redux";
import TeacherCourses from "../../components/templates/TeacherCourses";
import CreateFirsCourse from "../../components/templates/CreateFirsCourse";

interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  Theme: { name: string };
}

const Teach: React.FC = () => {
  const [haveCourses, sethaveCourses] = useState(false);
  const { auth } = useSelector((state: RootState) => state);
  const storedCourses: Course[] = auth?.createdCourses || [];

  useEffect(() => {
    if (storedCourses.length !== 0) {
      sethaveCourses(true);
    }
  }, [storedCourses]);

  return (
    <Container>
      {haveCourses ? (
        <TeacherCourses />
      ) : (
        <CreateFirsCourse />
      )}
    </Container>
  );
};

export default Teach;
