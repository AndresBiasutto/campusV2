import {
  CRREATE_COURSE,
  CourseActionTypes,
  GET_CREATED_COURSE,
  GET_USER_COURSES,
  CREATE_CHAPTER
} from "../actions/courseActions";

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
}
interface Chapter {
  id: string;
  name: string;
  courseId: string;
  lections: { id: string; name: string; lectionOrder: number, text: string }[];
  chapterOrder: number;
  text:string;
}
interface Course {
  courseOrder: number | undefined;
  id: string;
  name: string;
  image: string;
  Theme: { name: string };
  description: string;
  chapters: Chapter[];
  email: string;
  themeId: string;
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
};
const CourseReducer = (
  state: CourseState = initialCourseState,
  action: CourseActionTypes
): CourseState => {
  switch (action.type) {
    case CRREATE_COURSE:
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
        };
      }
      return state;
      case CREATE_CHAPTER:
        if ("payload" in action) {
          return {
            ...state,
            chapters: Array.isArray(action.payload) ? action.payload : [],
          };
        }
        return state;
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
      return {
        ...state,
        courses: Array.isArray(action.payload) ? action.payload : [],
      };

    default:
      return state;
  }
};

export default CourseReducer;
