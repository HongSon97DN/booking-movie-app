import {
    GET_ALL_CINEMA,
    GET_LIST_CINEMA_CLUSTERS,
    GET_MOVIE_DETAIL,
    GET_SHOWTIME_ID,
    GET_SHOW_TIMES,
    SELECT_CINEMA,
    SELECT_MOVIE_TICKET,
} from "../types/CinemaType";
import { GET_SEAT } from "../types/TicketBookingType";

const initialState = {
    currentCinema: {},
    arrCinema: [],
    arrCinemaCluster: [],
    arrShowTime: [],
    movie: {},
    movieSelected: {},
    showTimeId: "",
    arrSeat: {},
};

export const CinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CINEMA:
            state.arrCinema = action.arrCinema;
            state.currentCinema = state.arrCinema[0];
            return { ...state };

        case SELECT_CINEMA:
            state.currentCinema = action.cinemaSelected;
            return { ...state };

        case GET_LIST_CINEMA_CLUSTERS:
            state.arrCinemaCluster = action.arrCinema;
            return { ...state };

        case GET_SHOW_TIMES:
            state.arrShowTime = action.showTimes;
            return { ...state };

        case GET_MOVIE_DETAIL:
            state.movie = action.movie;
            return { ...state };

        case SELECT_MOVIE_TICKET:
            state.movieSelected = action.movieSelected;
            return { ...state };
            
        default:
            return state;
    }
};
