// rootReducer.ts
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import themeReducer from './themeReducer';
import CourseThemeReducer from './CourseThemeReducer';
import CourseReducer from './CourseReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  course: CourseReducer,
  courseTheme: CourseThemeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
