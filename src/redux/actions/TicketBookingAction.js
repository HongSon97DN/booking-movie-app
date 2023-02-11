import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { bothServiceToken } from "../../Service/BothTokenService";
import { BOOK_TICKET, SEAT_BOOKING } from "../../utils/setting";
import { GET_SEAT } from "../types/CinemaType";
import { HIDE_PRELOADING } from "../types/PreloadingType";
import { CLEAR_SEAT } from "../types/TicketBookingType";

export const getSeatBookingAction = (showTimeId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(SEAT_BOOKING + showTimeId)
            .then((res) => {
                middleWareDispatch({
                    type: GET_SEAT,
                    arrSeat: res.data.content,
                });
                middleWareDispatch({
                    type: HIDE_PRELOADING,
                });
            })
            .catch((err) => {
                console.log([err]);
            });
    };
};

export const bookTicketAction = (seatBookingModel) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .post(BOOK_TICKET, seatBookingModel)
            .then((res) => {
                toast.success("Book successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                middleWareDispatch({
                    type: CLEAR_SEAT,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
