import React, { useEffect } from "react";
import Slider from "react-slick";
import "./banner.css";
import { useDispatch, useSelector } from "react-redux";
import { getBanner, playTrailer } from "../../redux/actions/BannerAction";
import IframeFilm from "./IframeFilm/IframeFilm";
import { NavLink } from "react-router-dom";
import { DISPLAY_PRELOADING } from "../../redux/types/PreloadingType";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    useSelector((state) => state.PreloadingReducer);

    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: "10000",
                marginRight: "70px",
            }}
            onClick={onClick}
        >
            <i className="fa-solid fa-angles-right banner_icon-right"></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: "10000",
                marginLeft: "40px",
            }}
            onClick={onClick}
        >
            <i className="fa-solid fa-angles-left banner_icon-left"></i>
        </div>
    );
}
export default function BannerComponent() {
    const settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const settings2 = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
        ],
    };
    const dispatch = useDispatch();
    const { arrPhim } = useSelector((state) => state.BannerReducer);
    useEffect(() => {
        dispatch({ type: DISPLAY_PRELOADING });
        dispatch(getBanner());
    }, []);

    const renderPhim = () => {
        return arrPhim?.map((phim) => {
            return (
                <div key={phim.maPhim} className="position-relative">
                    <div
                        className="banner"
                        style={{
                            backgroundImage: `url(${phim.hinhAnh})`,
                            filter: "grayscale(10%)",
                        }}
                    >
                        <div className="container banner_content-mid">
                            <div className="row">
                                <div className="col-sm-12 col-xs-6 col-md-6 col-xl-6 ">
                                    <img
                                        src={phim.hinhAnh}
                                        alt=""
                                        className="mr-auto ml-auto"
                                    />
                                </div>
                                <div className="col-sm-12 col-xs-6 col-md-6 col-xl-6">
                                    <div className="mt-auto">
                                        <h2>{phim.tenPhim}</h2>
                                        <h4>
                                            {phim.moTa.length > 50
                                                ? phim.moTa.substring(0, 150) +
                                                  "..."
                                                : phim.moTa}
                                        </h4>
                                        <div className="mt-4">
                                            <button
                                                className="btn btn_white mr-3"
                                                onClick={() => {
                                                    dispatch(
                                                        playTrailer(
                                                            <IframeFilm
                                                                phim={phim}
                                                                isContent={true}
                                                            />
                                                        )
                                                    );
                                                }}
                                            >
                                                Play Trailer
                                            </button>
                                            <NavLink
                                                to={`/detail/${phim.maPhim}`}
                                            >
                                                <button className="btn btn_primary">
                                                    Buy ticket
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner_overlay-dark"></div>
                    </div>
                </div>
            );
        });
    };
    const renderPhimMini = () => {
        return arrPhim?.map((phim) => {
            return (
                <div
                    key={phim.maPhim}
                    className="position-relative banner_wrap-mini"
                >
                    <div
                        className="bannerMini"
                        style={{
                            backgroundImage: `url(${phim.hinhAnh})`,
                        }}
                    ></div>
                    <div className="bannerMini-star">
                        <span>
                            {phim.danhGia}
                            <i className="fa-solid fa-star"></i>
                        </span>
                    </div>
                    <div
                        className="position-absolute banner_wrap-icon-mini"
                        onClick={() => {
                            dispatch(
                                playTrailer(
                                    <IframeFilm phim={phim} isContent={true} />
                                )
                            );
                        }}
                    >
                        <i className="fa-regular fa-circle-play  banner_play_icon-mini"></i>
                    </div>
                    <div className="banner_content container">
                        <div className="banner_content-title">
                            <h6>{phim.tenPhim}</h6>
                            <h6 className="banner_mota">
                                <NavLink to={`/detail/${phim.maPhim}`}>
                                    <button className="btn btn_primary">
                                        Buy ticket
                                    </button>
                                </NavLink>
                            </h6>
                        </div>
                    </div>
                    <div className="banner_overlay"></div>
                </div>
            );
        });
    };
    return (
        <>
            <div className="bg-dark ">
                <Slider {...settings}>{renderPhim()}</Slider>
                <Slider {...settings2}>{renderPhimMini()}</Slider>
            </div>
        </>
    );
}
