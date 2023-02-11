import axios from "axios";
import { bothServiceToken } from "../../Service/BothTokenService";
import LibrarySupport from "../../utils/lib/LibrarySupport";
import { DOMAIN_CINEMA, MA_NHOM, TOKEN } from "../../utils/setting";
import { GET_BANNER, PLAY_TRAILER } from "../types/BannerType";
import { HIDE_PRELOADING } from "../types/PreloadingType";

export function getBanner() {
    return async (dispatch) => {
        try {
            const { data } = await bothServiceToken.get(
                `QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`
            );
            dispatch({ type: GET_BANNER, payload: data.content });
            setTimeout(() => {
                dispatch({ type: HIDE_PRELOADING });
            }, 2000);
        } catch (e) {
            console.log(e.response);
        }
    };
}
// PlayTrailer
export function playTrailer(payload) {
    console.log(payload);
    return (dispatch) => {
        dispatch({ type: PLAY_TRAILER, payload });
    };
}
