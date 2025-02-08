import React, { useEffect } from "react";
import Section from "../../layouts/Section";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { GetCreatedCourse } from "../../redux/actions/courseActions";
import { AppDispatch } from "../../redux/store";

const CreateCourseData: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { course } = useSelector((state: RootState) => state);

  const courseId = course.id || "";

  useEffect(() => {
    dispatch(GetCreatedCourse(courseId));
    console.log(course);
  }, []);

  return (
    <Section bgColor="primary">
      <h3 className="w-full text-start">Añadir capitulos y lecciones</h3>
      <div className="w-full grid grid-cols-2">
        <div className="w-1/3 h-full flex flex-col justify-start items-start gap-2">
          <img
            className="w-32 h-32 object-cover rounded-xl"
            src={course.image || ""}
            alt={course.name || ""}
          />
          <h4>{course.name} </h4>
          <span>{course.Theme?.name || ""} </span>
          <p>{course.description} </p>
        </div>
      </div>
    </Section>
  );
};

export default CreateCourseData;
