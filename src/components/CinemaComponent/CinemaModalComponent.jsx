import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cinemaModalAction } from "../../redux/actions/CinemaAction";
import { SELECT_CINEMA } from "../../redux/types/CinemaType";
import { CLOSE_MODAL } from "../../redux/types/ModalType";

export default function CinemaModalComponent(props) {
    const dispatch = useDispatch();
    useSelector((state) => state.CinemaReducer);
    useSelector((state) => state.ModalFilmReducer);

    const handleCinemaSelect = (cinema) => {
        //Change redux data of cinema
        let action = { type: SELECT_CINEMA, cinemaSelected: cinema };
        dispatch(action);

        //Close Modal
        dispatch(cinemaModalAction(CLOSE_MODAL, <CinemaModalComponent />));
    };

    const renderCinemaLogo = () => {
        return props.arrCinema.map((cinema) => {
            return (
                <div key={cinema.maHeThongRap} className="col">
                    <div
                        onClick={() => {
                            handleCinemaSelect(cinema);
                        }}
                        className="logo__container"
                    >
                        <img
                            className="cinema__logo"
                            src={cinema["logo"]}
                            alt=""
                        />
                    </div>
                </div>
            );
        });
    };
    return (
        <div className="mx-3">
            <div className="row text-center">{renderCinemaLogo()}</div>
        </div>
    );
}
