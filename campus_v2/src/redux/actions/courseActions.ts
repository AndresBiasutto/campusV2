import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import axios from "../../api/axios";
import { Lection } from "../../interfaces/Lection";
import { Course } from "../../interfaces/Course";
import { Chapter } from "../../interfaces/Chapter";
import {
  CREATE_COURSE,
  GET_CREATED_COURSE,
  GET_USER_COURSES,
  CREATE_CHAPTER,
  CREATE_LECTION,
  DELETE_LECTION,
  DELETE_CHAPTER,
  DELETE_COURSE,
  SET_ERROR,
} from "./../actionTypes";

export type CourseActionTypes =
  | { type: typeof CREATE_COURSE; payload: Course }
  | { type: typeof GET_CREATED_COURSE; payload: Course }
  | { type: typeof GET_USER_COURSES; payload: Course[] }
  | { type: typeof CREATE_CHAPTER; payload: Chapter }
  | { type: typeof CREATE_LECTION; payload: Lection }
  | { type: typeof DELETE_LECTION; payload: string }
  | { type: typeof DELETE_CHAPTER; payload: string }
  | { type: typeof DELETE_COURSE; payload: string }
  | { type: typeof SET_ERROR; payload: string };

export const createCourse = (
  newCourse: Course
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.post("/course", newCourse)).data;
      dispatch({ type: CREATE_COURSE, payload: apiData });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Error al crear el curso." });
    }
  };
};

export const getCreatedCourse = (
  courseId: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.get(`/course/${courseId}`)).data;
      dispatch({ type: GET_CREATED_COURSE, payload: apiData });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Error al obtener el curso." });
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
      dispatch({ type: SET_ERROR, payload: "Error al obtener los cursos." });
    }
  };
};

export const createChapter = (
  newChapter: Chapter
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.post("/course/chapter", newChapter)).data;
      dispatch({ type: CREATE_CHAPTER, payload: apiData });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Error al crear el capítulo." });
    }
  };
};

export const createLection = (
  newLection: Lection
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.post("/course/chapter/lection", newLection)).data;
      dispatch({ type: CREATE_LECTION, payload: apiData });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Error al crear la lección." });
    }
  };
};

export const deleteLection = (
  lectionId: string
): ThunkAction<Promise<void>, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      await axios.delete(`/course/chapter/lection/delete/${lectionId}`);
      dispatch({ type: DELETE_LECTION, payload: lectionId });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Error al eliminar la lección." });
    }
  };
};

export const deleteChapter = (
  chapterId: string
): ThunkAction<Promise<void>, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      await axios.delete(`/course/chapter/delete/${chapterId}`);
      dispatch({ type: DELETE_CHAPTER, payload: chapterId });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Error al eliminar el capítulo." });
    }
  };
};

export const deleteCourse = (
  courserId: string
): ThunkAction<Promise<void>, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      await axios.delete(`/course/delete/${courserId}`);
      dispatch({ type: DELETE_COURSE, payload: courserId });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "Error al eliminar el capítulo." });
    }
  };
};
