import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import axios from "../../api/axios";

export const GET_THEMES = "GET_THEMES";

interface Theme {
  name: string;
  id: string;
}

interface GetThemesAction {
  type: typeof GET_THEMES;
  payload: Theme[];  // ⬅️ Ahora es un array de objetos Theme[]
}

export type ThemeActionTypes = GetThemesAction;

export const GetThemes = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData: Theme[] = (await axios.get("/course/theme")).data; // ⬅️ Ajusta la URL si es necesario
      dispatch({ type: GET_THEMES, payload: apiData });  // ⬅️ Enviar un array en payload
    } catch (error) {
      console.error(error);
    }
  };
};
