import React, { useState } from "react";
import Container from "../../layouts/Container";
import Section from "../../layouts/Section";
import NavigationLink from "../../components/atoms/NavigationLink";
import { MdBookmarkAdd } from "react-icons/md";
import { Outlet } from "react-router-dom";

const Teach: React.FC = () => {
  const [haveCourses, sethaveCourses] = useState(false);
  return (
    <Container>
      {haveCourses ? (
        <Section bgColor="primary">
          <h2>My Courses</h2>
          <p>Course 1</p>
          <p>Course 2</p>
        </Section>
      ) : (
        <Section bgColor="primary">
          <h2>Crear mi primer curso</h2>
          <p>Estas listo para crear tu primer curso?</p>
          <NavigationLink
            text="si estoy listo"
            pathName="¡Si estoy listo!"
            path="/teach/createcourse"
            icon={<MdBookmarkAdd />}
          />
        </Section>
      )}

    </Container>
  );
};

export default Teach;
