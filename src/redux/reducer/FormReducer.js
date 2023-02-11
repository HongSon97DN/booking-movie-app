import {
  ACCESS_TOKEN,
  LOGIN,
  LOGOUT,
  USER_UPDATE,
  USER_LOGIN,
  USER_PROFILE,
} from "../types/FormType";

let uLogin = undefined;

if (localStorage.getItem(USER_LOGIN)) {
  uLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  uLogin: uLogin,
  userProfile: {},
};

export const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state.uLogin = { ...action.uLogin };
      return { ...state };

    case LOGOUT:
      localStorage.removeItem(ACCESS_TOKEN);
      let uLogout = localStorage.removeItem(USER_LOGIN);
      state.uLogin = uLogout;
      return { ...state };

    case USER_PROFILE:
      state.userProfile = action.userProfile;
      console.log(state.userProfile);
      return { ...state };

    case USER_UPDATE:
      state.uLogin = action.userUpdate;
      return { ...state };
    default:
      return state;
  }
};
