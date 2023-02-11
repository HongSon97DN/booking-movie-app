import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { CLOSE_MODAL } from "../../../redux/types/ModalType";
import "./modaliframe.css";
export default function IframeFilm({ phim, isContent }) {
  let { trailer } = phim;
  trailer = trailer.replace("watch?v=", "embed/");
const dispatch= useDispatch();
  return (
    <>
      <iframe
        style={{
          width: "100%",
          height: "400px",
          border: "none",
          padding: "10px",
        }}
        src={trailer}
        title="Dinh Dưỡng|Ăn Kiêng Là Ăn Đủ Chất Và Kiểm Soát Thức Ăn Hay Chúng Ta Nghĩ Ăn Kiêng Là Nhịn Đói, Ăn ít"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      {isContent && (
        <div className="row iframe_modal p-3">
          <div className=" col-sm-12 col-lg-4">
            <img src={phim.hinhAnh} alt="" />
          </div>
          <div className=" col-sm-12 col-lg-8 content">
            <h5>{phim.tenPhim}</h5>
            <h6>
              <div className="text-danger mt-1 mb-2">Mô tả</div>
              {phim.moTa?.length > 50
                ? phim.moTa?.substring(0, 150) + "..."
                : phim.moTa}
            </h6>
            <div className="text-center">

            <NavLink to={`/detail/${phim.maPhim}`}>
              <button className="btn btn_primary" onClick={()=>{
                dispatch({type:CLOSE_MODAL})
              }}>Buy ticket</button>
            </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
