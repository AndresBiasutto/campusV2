import {
  CREATE_COURSE,
  GET_CREATED_COURSE,
  GET_USER_COURSES,
  CREATE_CHAPTER,
  DELETE_LECTION,
  DELETE_CHAPTER,
  DELETE_COURSE,
  SET_ERROR,
} from "../actionTypes";
import { Course } from "../../interfaces/Course";
import { Chapter } from "../../interfaces/Chapter";
import { CourseActionTypes } from "../actions/courseActions";

interface CourseState {
  id: string | null;
  name: string | null;
  image: string | null;
  creatorId: string | null;
  description: string | null;
  contactNumber: string | null;
  email: string | null;
  Theme: { name: string } | null;
  Creator: {} | null;
  themeId: string | null;
  userCourses: [] | null;
  chapters: Chapter[] | null;
  error: string | null;
} 

interface CourseState {
  courses: Course[];
}

const initialCourseState: CourseState = {
  courses: [],
  chapters: null,
  id: null,
  name: null,
  image: null,
  creatorId: null,
  description: null,
  contactNumber: null,
  email: null,
  Theme: null,
  Creator: null,
  themeId: null,
  userCourses: null,
  error: null
};

const courseReducer = (
  state: CourseState = initialCourseState,
  action: CourseActionTypes
): CourseState => {
  switch (action.type) {
    case CREATE_COURSE:
      return { ...state, courses: [...state.courses, action.payload] };

      case GET_CREATED_COURSE:
        if ("payload" in action) {
          return {
            ...state,
            name: action.payload.name,
            themeId: action.payload.themeId,
            id: action.payload.id,
            creatorId: action.payload.creatorId,
            image: action.payload.image,
            description: action.payload.description,
            Theme: action.payload.Theme,
            chapters: action.payload.chapters.map((chapter: any) => ({
              ...chapter,
              chapterOrder: chapter.chapterOrder || undefined,
              courseOrder: chapter.courseOrder || '',
            })),
          };
        }
        return state;
    case GET_USER_COURSES:
      return { ...state, courses: action.payload };

    case CREATE_CHAPTER:
      return {
        ...state,
        chapters: state.chapters ? [...state.chapters, action.payload] : [action.payload],
      };

    case DELETE_LECTION:
      return {
        ...state,
        chapters: state.chapters
          ? state.chapters.map((chapter) => ({
              ...chapter,
              lections: chapter.lections.filter(
                (lection) => lection.id !== action.payload
              ),
            }))
          : [],
      };

    case DELETE_CHAPTER:
      return {
        ...state,
        chapters: state.chapters?.filter((chapter) => chapter.id !== action.payload) || [],
      };
      case DELETE_COURSE:
        return {
          ...state,
          courses: state.courses.filter((course) => course.id !== action.payload),
          chapters: state.chapters?.filter((chapter) => chapter.courseId !== action.payload) || [],
        };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default courseReducer;
