import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import { Input } from "antd";
import {
  deleteMovie,
  getListMovie,
} from "../../../redux/actions/MovieManagerAction";
import { NavLink } from "react-router-dom";
import "../admincss.css";
import { history } from "../../../App";

const { Search } = Input;

const MovieAdmin = (props) => {
  const dispatch = useDispatch();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const onSearch = (value) => {
    dispatch(getListMovie(value));
  };
  //selector,dispatch
  const { arrMovieDefault } = useSelector((state) => state.MovieManagerReducer);
  const columns = [
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      width: 200,
      sorter: (a, b) => {
        let tenphimA = a.tenPhim.toLowerCase().trim();
        let tenphimB = b.tenPhim.toLowerCase().trim();

        if (tenphimA > tenphimB) return 1;
        return -1;
      },
    },
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "maPhim",
      width: 120,
      sorter: (a, b) => a.maPhim - b.maPhim,
    },
    {
      title: "Banner",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text, movie) => {
        return (
          <Fragment>
            <img
              src={movie.hinhAnh}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Ngày chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      render: (text, film) => {
        return (
          <>
            {film.moTa.length > 50
              ? film.moTa.substring(0, 50) + "..."
              : film.moTa}
          </>
        );
      },
    },
    {
      title: "Tác vụ",
      dataIndex: "",
      key: "x",
      width: 200,
      render: (text, movie) => (
        <>
          <div>
            <DeleteOutlined className="movie_admin-icon text-danger" />
            <span
              className="movie_admin-icon text-danger"
              onClick={() => {
                if (window.confirm("Bạn muốn xóa phim không?")) {
                  dispatch(deleteMovie(movie.maPhim));
                }
              }}
            >
              Xóa
            </span>
          </div>
          <div>
            <NavLink to={`/admin/movieadmin/editmovie/${movie.maPhim}`}>
              <EditOutlined className="movie_admin-icon text-info" />
              <span className="movie_admin-icon text-info">Chỉnh sửa</span>
            </NavLink>
          </div>
          <div>
            <NavLink to={`/admin/movieadmin/showtimeadmin/${movie.maPhim}`}>
              <CalendarOutlined className="movie_admin-icon text-warning" />
              <span className="movie_admin-icon text-warning">+ Tạo lịch chiếu</span>
            </NavLink>
          </div>
        </>
      ),
    },
  ];
  // UseEffect
  useEffect(() => {
    dispatch(getListMovie());
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3>Quản lý Phim</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            history.push("/admin/movieadmin/addmovie");
          }}
        >
          Tôi muốn thêm phim
        </button>
      </div>

      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <hr />
      <Table
        rowKey="maPhim"
        columns={columns}
        dataSource={arrMovieDefault}
        onChange={handleChange}
      />
    </>
  );
};
export default MovieAdmin;
