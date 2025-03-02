import React, { useEffect, useState } from "react";
import ChapterCard from "./cards/ChapterCard";
import AddChapterBtn from "../molecules/AddChapterBtn";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getCreatedCourse,
  getMyCourses,
} from "../../redux/actions/courseActions";
import { RootState } from "../../redux/reducers";
import { useParams } from "react-router-dom";
import CreatChapterFormOrg from "./forms/CreateChapterFormOrg";
import useOrderedList from "../../hooks/UseOrderList";

const CreateCourseDataOrg: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { courseId } = useParams<{ courseId: string }>();
  const { course } = useSelector((state: RootState) => state);
  const { id: userId } = useSelector((state: RootState) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getCreatedCourse(courseId || ""));

    return () => {
      dispatch(getCreatedCourse(""));
    };
  }, [courseId]);
  useEffect(() => {

    getMyCourses(userId || "");
  }, [course.chapters]);

  const orderedChapters = useOrderedList(course?.chapters ?? [], "chapterOrder");

  return (
    <div className=" relative w-full h-auto flex flex-col justify-start items-start ">
      {orderedChapters &&
        orderedChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapterId={chapter.id}
            name={chapter.name}
            chapterOrder={chapter.chapterOrder}
            lections={chapter.lections}
          />
        ))}
      <div className=" w-full mt-2">
        <AddChapterBtn
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          title="Mi Modal"
          modalChildren={<CreatChapterFormOrg />}
        />
      </div>
    </div>
  );
};

export default CreateCourseDataOrg;
