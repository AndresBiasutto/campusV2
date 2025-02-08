import { GET_THEMES, ThemeActionTypes } from "../actions/themeActions";

interface Theme {
  id: string;
  name: string;
}

interface ThemeState {
  Themes: Theme[];  // ⬅️ Ahora Themes es un array de objetos
}

const initialThemeState: ThemeState = {
  Themes: [],  // ⬅️ Inicializamos como un array vacío
};

const CourseThemeReducer = (
  state: ThemeState = initialThemeState,
  action: ThemeActionTypes
): ThemeState => {
  switch (action.type) {
    case GET_THEMES:
      if ("payload" in action) {
        return {
          ...state,
          Themes: action.payload, // ⬅️ Guardamos directamente el array de temas
        };
      }
      return state;
    default:
      return state;
  }
};

export default CourseThemeReducer;
