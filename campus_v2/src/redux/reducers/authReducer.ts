import {
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER,
  AuthActionTypes,
} from "../actions/authActions";

interface AuthState {
  token: any;
  isAuthenticated: boolean;
  themeId: boolean;
  name: string | null;
  role: string | null;
  email: string | null;
  id: string | null;
  image: string | null;
  contactNumber: string | null;
  description: string | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  themeId: false,
  name: null,
  role: null,
  email: null,
  id: null,
  token: null,
  image: null,
  contactNumber: null,
  description: null,
};

const authReducer = (
  state: AuthState = initialAuthState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if ("payload" in action) {
        return {
          ...state,
          isAuthenticated: true,
          name: action.payload.name,
          role: action.payload.role,
          email: action.payload.email,
          id: action.payload.id,
          token: action.payload.token,
          image: action.payload.image,
          contactNumber: action.payload.contactNumber,
          description: action.payload.description
        };
      }
      return state;
    case UPDATE_USER:
      if ("payload" in action) {
        return {
          ...state,
          isAuthenticated: true,
          name: action.payload.name,
          image: action.payload.image,
          contactNumber: action.payload.contactNumber,
        };
      }
      return state;
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        name: null,
        role: null,
        id: null,
        token: null,
        image: null,
      };

    default:
      return state;
  }
};

export default authReducer;
