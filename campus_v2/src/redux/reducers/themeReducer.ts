import { TOGGLE_THEME } from "../actions/authActions";

// Define el tipo para el estado inicial
interface ThemeState {
  darkMode: boolean;
}

// Estado inicial tipado
const initialThemeState: ThemeState = {
  darkMode: false,
};

// Define el tipo de las acciones
interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

type ThemeAction = ToggleThemeAction;

// Reducer con tipos para el estado y las acciones
const themeReducer = (
  state: ThemeState = initialThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
