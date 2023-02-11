import { MA_NHOM } from "./setting";

const CINEMA_ID = "maHeThongRap";
const GROUP_ID = "maNhom";

export const getCinemaQuery = (cinemaId) => {
    return `?` + CINEMA_ID + `=` + cinemaId;
};

export const getCinemaShowTImesQuery = (cinemaId) => {
    return `?` + CINEMA_ID + `=` + cinemaId + `&` + GROUP_ID + `=` + MA_NHOM;
};
