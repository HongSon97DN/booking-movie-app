import axios from "axios";
import { DOMAIN_CINEMA, TOKEN, USER_PROFILE_API } from "../../utils/setting";
import {
  ACCESS_TOKEN,
  LOGIN,
  OPEN_LOGIN,
  USER_LOGIN,
  USER_PROFILE,
  USER_UPDATE,
} from "../types/FormType";
import Login from "../../pages/Login/Login";
import { toast } from "react-toastify";
import { bothServiceToken } from "../../Service/BothTokenService";
import { history } from "../../App";

export const loginAction = (userInfo) => {
  return (dispatch2) => {
    let promise = axios({
      url: `${DOMAIN_CINEMA}/QuanLyNguoiDung/DangNhap`,
      method: "post",
      data: userInfo,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
    promise.then((result) => {
      localStorage.setItem(
        ACCESS_TOKEN,
        JSON.stringify(result.data.content.accessToken)
      );

      toast.success("Login successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      let action = {
        type: LOGIN,
        uLogin: result.data.content,
      };
      console.log(result.data.content);
      if (
        result.data.content.maLoaiNguoiDung.trim().toLowerCase() === "quantri"
      ) {
        history.push("/admin");
      }
      dispatch2(action);

      let userInfo = JSON.stringify(result.data.content);
      localStorage.setItem(USER_LOGIN, userInfo);
    });
    promise.catch((error) => {
      console.log(error.response?.data);
      toast.error("Login failed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };
};

export const registerAction = (userInfo) => {
  return (dispatch2) => {
    let promise = axios({
      url: `${DOMAIN_CINEMA}/QuanLyNguoiDung/DangKy`,
      method: "post",
      data: userInfo,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
    promise.then((result) => {
      toast.success("Register successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch2({ type: OPEN_LOGIN, modalLogin: <Login /> });
    });
    promise.catch((error) => {
      toast.error("Username or email is existed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(error.response?.data);
    });
  };
};

export const getUserInfoAction = () => {
  return (dispatch2) => {
    bothServiceToken
      .post(USER_PROFILE_API)
      .then((result) => {
        let action = {
          type: USER_PROFILE,
          userProfile: result.data.content,
        };
        dispatch2(action);
      })
      .catch((error) => {
        console.log(error.response?.data);
      });
  };
};

export const updateUser = (values) => {
  return (dispatch2) => {
    bothServiceToken
      .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", values)
      .then((result) => {
        dispatch2({ type: USER_UPDATE, userUpdate: result.data.content });
        localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
        toast.success("Update profile successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("User profile is existed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
};
