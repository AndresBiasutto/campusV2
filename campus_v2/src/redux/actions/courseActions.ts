import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import axios from "../../api/axios";

export const GET_THEMES = "GET_THEMES";
export const CRREATE_COURSE = "GET_COURSES";
export const GET_CREATED_COURSE = "GET_CREATED_COURSE";
export const GET_USER_COURSES = "GET_USER_COURSES";
export const CREATE_CHAPTER = "CREATE_CHAPTER";
export const CREATE_LECTION = "CREATE_LECTION";

interface Course {
  id: string;
  name: string;
  image: string;
  creatorId: string;
  themeId: string;
  description: string;
  Theme: { name: string };
  Creator: { name: string; id: string };
  chapters: { id: string; name: string; courseId: string }[];
  // lessons: {id: string, name: string, lectionOrder: number}[];
}
interface Chapter {
  id: string;
  name: string;
  courseId: string;
  lections: { id: string; name: string; lectionOrder: number; text: string; }[];
  chapterOrder: number;
}

interface Lection {
  id: string;
  name: string;
  video: string;
  text: string;
  chapterId: string;
  lectionOrder: number;
}

interface CreateCourseAction {
  type: typeof CRREATE_COURSE;
  payload: Course;
}
interface GetCreatedCourseAction {
  type: typeof GET_CREATED_COURSE;
  payload: Course;
}
interface GetUserCoursseAction {
  type: typeof GET_USER_COURSES;
  payload: Course;
}
interface CreateChapterAction {
  type: typeof CREATE_CHAPTER;
  payload: Course;
}
interface CreateLectionAction {
  type: typeof CREATE_LECTION;
  payload: Course;
}
export type CourseActionTypes =
  | CreateCourseAction
  | GetCreatedCourseAction
  | CreateChapterAction
  | CreateLectionAction
  | GetUserCoursseAction;

export const CreateCourse = (
  newCourse: Course
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      console.log("Enviando curso desde el cliente:", newCourse);
      const apiData = (await axios.post("/course", newCourse)).data;
      const createdCourseId = apiData.id;
      GetCreatedCourse(createdCourseId);
      dispatch({ type: CRREATE_COURSE, payload: apiData });
    } catch (error) {
      console.error("Error al crear curso:", error);
    }
  };
};

export const GetCreatedCourse = (
  courseId: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.get(`/course/${courseId}`)).data;
      dispatch({ type: GET_CREATED_COURSE, payload: apiData });
    } catch (error) {
      console.error("Error al obtener el curso:", error);
    }
  };
};
export const getMyCourses = (
  userId: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.get(`/course/usercourses/${userId}`)).data;
      dispatch({ type: GET_USER_COURSES, payload: apiData });
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  };
};
export const CreateChapter = (
  newChapter: Chapter
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      console.log("Enviando curso desde el cliente:", newChapter);
      const apiData = (await axios.post("/course/chapter", newChapter)).data;
      dispatch({ type: CREATE_CHAPTER, payload: apiData });
    } catch (error) {
      console.error("Error al crear curso:", error);
    }
  };
};
export const CreateLection = (
  newLection: Lection
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      console.log("Enviando curso desde el cliente:", newLection);
      const apiData = (await axios.post("/course/chapter/lection", newLection)).data;
      dispatch({ type: CREATE_LECTION, payload: apiData });
    } catch (error) {
      console.error("Error al crear curso:", error);
    }
  };
};