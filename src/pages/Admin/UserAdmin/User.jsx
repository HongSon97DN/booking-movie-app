import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import { Input } from "antd";
import { NavLink } from "react-router-dom";
import "../admincss.css";
import { history } from "../../../App";
import {
  deleteUser,
  getListUser,
} from "../../../redux/actions/UserManagerAction";

const { Search } = Input;

const User = (props) => {
  const dispatch = useDispatch();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const onSearch = (value) => {
    dispatch(getListUser(value));
  };
  //selector,dispatch
  const { userList } = useSelector((state) => state.UserManagerReducer);
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      width: 200,
      sorter: (a, b) => {
        return a.taiKhoan - b.taiKhoan;
      },
    },
    {
      title: "Họ và Tên",
      dataIndex: "hoTen",
      key: "hoTen",
      width: 200,
      sorter: (a, b) => a.hoTen - b.hoTen,
    },
    {
      width: 130,
      title: "SĐT",
      dataIndex: "soDT",
      key: "soDT",
      sorter: (a, b) => a.soDT - b.soDT,
    },
    {
      width: 170,
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      sorter: (a, b) => {
        let maLoaiNguoiDungA = a.maLoaiNguoiDung.toLowerCase().trim();
        let maLoaiNguoiDungB = b.maLoaiNguoiDung.toLowerCase().trim();
        if (maLoaiNguoiDungA > maLoaiNguoiDungB) return 1;
        return -1;
      },
    },
    {
      width: 180,
      title: <h6>Tác vụ</h6>,
      dataIndex: "",
      key: "x",
      render: (text, user) => (
        <>
          {user.maLoaiNguoiDung !== "QuanTri" && (
            <div>
              <NavLink to={`/admin/edituser/infouser/${user.taiKhoan}`}>
                <EditOutlined className="movie_admin-icon text-warning" />
                <span
                  className="movie_admin-icon text-warning"
                >
                  Xem lịch sử đặt vé
                </span>
              </NavLink>
            </div>
          )}
          <div>
            <DeleteOutlined className="movie_admin-icon text-danger" />
            <span
              className="movie_admin-icon text-danger"
              onClick={() => {
                if (window.confirm("Bạn muốn xóa người dùng này không?")) {
                  dispatch(deleteUser(user.taiKhoan));
                }
              }}
            >
              Xóa
            </span>
          </div>
          <div>
            <NavLink to={`/admin/edituser/${user.taiKhoan}`}>
              <EditOutlined className="movie_admin-icon text-info" />
              <span className="movie_admin-icon text-info">Chỉnh sửa</span>
            </NavLink>
          </div>
        </>
      ),
    },
  ];
  // UseEffect
  useEffect(() => {
    dispatch(getListUser());
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3>Quản lý người dùng</h3>
        <button
          className="btn btn-warning text-dark font-weight-bold"
          onClick={() => {
            history.push("/admin/edituser/adduser");
          }}
        >
          Tôi muốn thêm người dùng
        </button>
      </div>

      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <hr />
      <Table
        rowKey="taiKhoan"
        columns={columns}
        dataSource={userList}
        onChange={handleChange}
      />
    </>
  );
};
export default User;
