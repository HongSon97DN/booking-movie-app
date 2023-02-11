import { Table } from "antd";
import Search from "antd/lib/transfer/search";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUser } from "../../../../redux/actions/UserManagerAction";

export default function InfoUser(props) {
  const { taiKhoan } = props.match.params;
  const dispatch = useDispatch();
  const onSearch = (value) => {};
  const { userInfo } = useSelector((state) => state.UserManagerReducer);
  let monthCur = moment(new Date()).format("MM");

  let filterFilm = userInfo?.thongTinDatVe?.filter((film) => {
    let convertMYrs = moment(film.ngayDat).format("MMYY");
    let monthYearCur = moment(new Date()).format("MMYY");
    return convertMYrs === monthYearCur;
  });
  useEffect(() => {
    dispatch(getInfoUser(taiKhoan));
  }, []);

  let columns = [
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      width: 200,
      sorter: (a, b) => {
        return a.taiKhoan - b.taiKhoan;
      },
    },
    {
      title: "Vé đã đặt",
      dataIndex: "danhSachGhe",
      key: "x",
      width: 200,
      sorter: (a, b) => {
        return a.danhSachGhe - b.danhSachGhe;
      },
      render: (text, user) => {
        return (
          <>
            {user.danhSachGhe.map((ghe, i) => {
              if (i === user.danhSachGhe.length - 1) {
                return `${ghe.tenGhe}`;
              } else {
                return `${ghe.tenGhe},`;
              }
            })}
          </>
        );
      },
    },
  ];
  return (
    <div className="container">
      <h2>Lịch sử Buy ticket</h2>
      {filterFilm?.length === 0 ? (
        <div>
          <h2 className="text-warning">
            Trong tháng {monthCur} bạn chưa đặt vé nào cả!!!{" "}
          </h2>
        </div>
      ) : (
        ""
      )}
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <hr />
      <Table rowKey="taiKhoan" columns={columns} dataSource={filterFilm} />
    </div>
  );
}
