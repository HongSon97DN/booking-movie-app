import { GET_BANNER } from "../types/BannerType";

const initialState = {
  arrPhim: [],
};

export const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER:
      state.arrPhim = action.payload.slice(0, 8);
      return { ...state };

    default:
      return state;
  }
};
