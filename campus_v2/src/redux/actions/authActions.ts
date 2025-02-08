import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import axios from "../../api/axios";

// Definición de constantes de acción
export const REGISTER = "REGISTER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOAD_USER_FROM_STORAGE = "LOAD_USER_FROM_STORAGE";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";

// Definición de tipos para el usuario
interface User {
  token: string;
  name: string;
  role: string;
  image: string;
  id: string;
  description: string;
  contactNumber: string;
  email: string;
}
interface updatedUser {
  name: string;
  image: string;
  description: string;
  contactNumber: string;
}
interface NewUser {
  name: string;
  e_mail: string;
  password: string;
  roles: string;
}

// Definición de tipos de acciones
interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}
interface RegisterSuccessAction {
  type: typeof REGISTER;
  payload: User;
}
interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

// Unión de tipos de acción
export type AuthActionTypes =
  | UpdateUserAction
  | LoginSuccessAction
  | RegisterSuccessAction
  | LogoutAction
  | ToggleThemeAction;

export const loginSuccess = (user: User): LoginSuccessAction => {
  // Guarda datos en localStorage
  window.localStorage.setItem("token", user.token);
  window.localStorage.setItem("name", user.name);
  window.localStorage.setItem("role", user.role);
  window.localStorage.setItem("image", user.image);
  window.localStorage.setItem("id", user.id);
  window.localStorage.setItem("description", user.description);
  window.localStorage.setItem("contactNumber", user.contactNumber);
  window.localStorage.setItem("email", user.email);

  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const toggleTheme = (): ToggleThemeAction => ({
  type: TOGGLE_THEME,
});

export const register = (
  newUser: NewUser
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.post("/auth/register", newUser)).data;
      dispatch({ type: REGISTER, payload: apiData });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateUser = (
  id: string,
  updatedUser: updatedUser,
  token: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const apiData = (
        await axios.patch(`/auth/updateUser/${id}`, updatedUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      dispatch({ type: UPDATE_USER, payload: apiData });
      // dispatch(getOneUser(id, token))
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
    }
  };
};

// Acción para cargar el usuario desde el almacenamiento
export const loadUserFromStorage = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    const token = window?.localStorage?.getItem("token") || "";
    const name = window?.localStorage?.getItem("name") || "";
    const role = window?.localStorage?.getItem("role") || "";
    const image = window?.localStorage?.getItem("image") || "";
    const id = window?.localStorage?.getItem("id") || "";
    const description = window?.localStorage?.getItem("description") || "";
    const contactNumber = window?.localStorage?.getItem("contactNumber") || "";
    const email = window?.localStorage?.getItem("email") || "";

    if (token) {
      const user: User = {
        token,
        name,
        role,
        image,
        id,
        description,
        contactNumber,
        email,
      };
      dispatch(loginSuccess(user));
    }
  };
};
