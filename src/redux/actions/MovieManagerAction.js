import { bothServiceToken } from "../../Service/BothTokenService";
import { DOMAIN_CINEMA, MA_NHOM } from "../../utils/setting";
import {
  GET_INFO_FILM,
  GET_LIST_FILM,
  GET_DETAIL_FILM,
} from "../types/MovieManagerType";
import { history } from "../../App";
import { toast } from "react-toastify";
//Get all movies, get movieBy Name
export function getListMovie(tenPhim = "") {
  return async (dispatch) => {
    try {
      let url;
      if (tenPhim === "") {
        url = `QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`;
      } else {
        url = `QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}&tenPhim=${tenPhim}`;
      }
      const { data } = await bothServiceToken.get(url);
      dispatch({ type: GET_LIST_FILM, payload: data.content });
    } catch (e) {
      console.log(e.response);
      toast.err("Error!!!");
    }
  };
}
// upLoad Movie
export function uploadMovie(datas) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(
        "QuanLyPhim/ThemPhimUploadHinh",
        datas
      );
      toast.success("Success");
      dispatch(getListMovie());
      history.push("/admin/movieadmin");
    } catch (e) {
      console.log(e.response);
      toast.err("Error!!!");
    }
  };
}
//get InfoFilm to edit
export function getInfoMovie(maPhim) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
      );

      dispatch({ type: GET_INFO_FILM, payload: data.content });
    } catch (e) {
      console.log(e.response);
      toast.err("Error!!!");
    }
  };
}
// edit Movie
export function editMovie(movie) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(
        `QuanLyPhim/CapNhatPhimUpload`,
        movie
      );

      toast.success("Success");

      history.push("/admin/movieadmin");
      getListMovie();
    } catch (e) {
      console.log(e.response);
      toast.err("Error!!!");
    }
  };
}
// delete Movie
export function deleteMovie(maPhim) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(
        `QuanLyPhim/XoaPhim?MaPhim=${maPhim}`
      );
      toast.success("Success");

      getListMovie();
      history.go(0);
    } catch (e) {
      console.log(e.response);
      toast.err("Error!!!");
    }
  };
}
//Create calendar
export function createCalendar(value) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(
        `QuanLyDatVe/TaoLichChieu`,
        value
      );
      toast.success("Success");

      getListMovie();
      history.push("/admin/movieadmin");
    } catch (e) {
      console.log(e.response);
      toast.err("Error!!!");
    }
  };
}
// LayThongTinLichChieuPhim
export function getReleaseFilm(maPhim) {
  return (dispatch) => {
    bothServiceToken
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
      .then((res) => {
        dispatch({
          type: GET_DETAIL_FILM,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
