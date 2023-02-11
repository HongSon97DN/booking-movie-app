import {
    CLEAR_SEAT,
    GET_SEAT,
    SELECT_TICKET,
} from "../types/TicketBookingType";

const initialState = {
    arrSelectedSeat: [],
    movieInfo: {},
    arrSeat: [],
};

export const TicketBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TICKET:
            let indexFound = state.arrSelectedSeat.findIndex(
                (seat) => seat.maGhe === action.selectedSeat.maGhe
            );
            //remove selected seat if is existed
            if (indexFound !== -1) {
                state.arrSelectedSeat.splice(indexFound, 1);
            } else {
                state.arrSelectedSeat = [
                    ...state.arrSelectedSeat,
                    action.selectedSeat,
                ];
            }
            return { ...state };

        case GET_SEAT:
            const { thongTinPhim, danhSachGhe } = action.arrSeat;
            state.movieInfo = thongTinPhim;
            state.arrSeat = danhSachGhe;

            return { ...state };

        case CLEAR_SEAT:
            state.arrSelectedSeat = [];
            return { ...state };

        default:
            return state;
    }
};
