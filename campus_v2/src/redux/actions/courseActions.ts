import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import axios from "../../api/axios";

export const GET_THEMES = "GET_THEMES";
export const CRREATE_COURSE = "GET_COURSES";
export const GET_CREATED_COURSE = "GET_CREATED_COURSE";

interface Course {
  id: string;
  name: string;
  image: string;
  creatorId: string;
  themeId: string;
  description: string;
  Theme: {name: string};
  // Creator: {};
}



interface CreateCourseAction {
  type: typeof CRREATE_COURSE;
  payload: Course;
}
interface GetCreatedCourseAction {
  type: typeof GET_CREATED_COURSE;
  payload: Course;
}

export type CourseActionTypes = CreateCourseAction | GetCreatedCourseAction;

export const CreateCourse = (
  newCourse: Course
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      console.log("Enviando curso desde el cliente:", newCourse);     
      const apiData = (await axios.post("/course", newCourse)).data;
      console.log("Respuesta del servidor:", apiData);
      dispatch({ type: CRREATE_COURSE, payload: apiData });
    } catch (error) {
      console.error("Error al crear curso:", error);
    }
  };
};


 export const GetCreatedCourse = (
   id: string
 ):  ThunkAction<void, RootState, unknown, Action<string>> => {
   return async (dispatch) => {
     try {
       const apiData = (await axios.get(`/course/${id}`)).data;
       dispatch({ type: GET_CREATED_COURSE, payload: apiData });
     } catch (error) {
       console.error(error);
     }
   };
 };
