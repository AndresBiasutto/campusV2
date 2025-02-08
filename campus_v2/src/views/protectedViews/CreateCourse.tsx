import React from "react";
import Container from "../../layouts/Container";
import CreateCourseHeader from "../../components/templates/CreateCourseHeader";
// import CreateCourseForm from "../../components/templates/CreateCourseForm";
import { Outlet } from "react-router-dom";

const CreateCourse: React.FC = () => {
  return (
    <Container>
      <CreateCourseHeader />
      <Outlet />
      {/* <CreateCourseForm /> */}
    </Container>
  );
};

export default CreateCourse;
