import {
  CRREATE_COURSE,
  CourseActionTypes,
  GET_CREATED_COURSE,
} from "../actions/courseActions";

interface CourseState {
  id: string | null;
  name: string | null;
  image: string | null;
  creatorId: string | null;
  description: string | null;
  contactNumber: string | null;
  email: string | null;
  Theme: {name: string} | null;
  Creator: {} | null;
  themeId: string | null;
}

const initialCourseState: CourseState = {
  id: null,
  name: null,
  image: null,
  creatorId: null,
  description: null,
  contactNumber: null,
  email: null,
  Theme: {
    name: ""
  },
  Creator: {},
  themeId: null,
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
        };
      }
      return state;
    default:
      return state;
  }
};

export default CourseReducer;
