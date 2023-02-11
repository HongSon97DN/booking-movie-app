import {
  GET_INFO_USER,
  GET_LIST_USER,
  GET_TYPE_USER,
} from "../types/UserManagerType";

const initialState = {
  userList: [],
  userInfo: {},
  userType: [],
};

export const UserManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_USER:
      state.userList = action.payload;
      return { ...state };
    case GET_INFO_USER:
      state.userInfo = action.payload;
      return { ...state };
    case GET_TYPE_USER:
      state.userType = action.payload;
      return { ...state };
    default:
      return state;
  }
};
