import React from "react";
import ChapterCard from "./cards/ChapterCard";
import AddChapterBtn from "../atoms/AddChapterBtn";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/reducers";
// import { GetCreatedCourse } from "../../redux/actions/courseActions";
// import { AppDispatch } from "../../redux/store";
// import { useParams } from 'react-router-dom';

const CreateCourseDataOrg: React.FC = () => {
  // const { courseId } = useParams();
  // const dispatch = useDispatch<AppDispatch>();
  // const { course } = useSelector((state: RootState) => state);

  // useEffect(() => {
  //   if (courseId) {
  //     dispatch(GetCreatedCourse(courseId))
  //   }
  // }, [courseId, dispatch]);

  return (
    <div className="w-full h-auto flex flex-col justify-start items-start">
      <ChapterCard />
      <ChapterCard />
      <ChapterCard />
      <div className=" w-full mt-2">
        <AddChapterBtn />
      </div>
    </div>
  );
};

export default CreateCourseDataOrg;
