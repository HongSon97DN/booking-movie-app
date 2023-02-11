import { PLAY_TRAILER } from "../types/BannerType";
import { OPEN_LOGIN, OPEN_REGISTER } from "../types/FormType";
import {
    CLOSE_MODAL,
    OPEN_LIST_CINEMA_MODAL,
    OPEN_MODAL,
} from "../types/ModalType";

const initialState = {
    show: false,
    ComponentContentModal: <p>dfadfasdfasdf</p>,
};

export const ModalFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            state.show = true;
            return { ...state };
        case CLOSE_MODAL:
            state.show = false;
            return { ...state };
        case OPEN_LOGIN:
            state.show = true;
            state.ComponentContentModal = action.modalLogin;
            return { ...state };
        case OPEN_REGISTER:
            state.show = true;
            state.ComponentContentModal = action.modalRegister;
            return { ...state };
        case PLAY_TRAILER:
            state.ComponentContentModal = action.payload;
            state.show = true;

            return { ...state };

        case OPEN_LIST_CINEMA_MODAL:
            state.ComponentContentModal = action.payload;
            state.show = true;
            return { ...state };

        default:
            return state;
    }
};
