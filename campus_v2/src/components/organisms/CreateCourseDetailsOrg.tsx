import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/reducers";
import { GetCreatedCourse } from "../../redux/actions/courseActions";

const CreateCourseDetailsOrg: React.FC = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { course } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (courseId) {
      dispatch(GetCreatedCourse(courseId));
    }
  }, [courseId, dispatch]);
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-2 p-2 md:order-2 border-light-border dark:border-dark-border rounded-tl-lg rounded-br-lg">
      <div className="w-48 h-48">
        <img
          className=" border-2 border-light-border  dark:border-dark-border rounded-tl-lg rounded-br-lg w-full h-full object-cover"
          src={course?.image || ""}
          alt={course.name || "sin nombre"}
        />
      </div>
      <h4>{course?.name} </h4>
      <span>{course?.Theme?.name} </span>
      <p>{course?.description} </p>
    </div>
  );
};

export default CreateCourseDetailsOrg;
