import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { MA_NHOM } from "../../../../utils/setting";
import { useDispatch, useSelector } from "react-redux";
import { editMovie } from "../../../../redux/actions/MovieManagerAction";
import moment from "moment";
import { getInfoMovie } from "../../../../redux/actions/MovieManagerAction";

export const useEditMovie = (props) => {
  const dispatch = useDispatch();
  const { thongTinPhim } = useSelector((state) => state.MovieManagerReducer);
  useEffect(() => {
    const { maPhim } = props.match.params;
    dispatch(getInfoMovie(maPhim));
  }, []);
  let [imgSrc, setImgSrc] = useState("");
  //   formik
  const formik = useFormik({
    // bật enableReinitialize khi thế giá trị bằng props nên dùng chỉ cho trang Edit
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim?.maPhim,
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim?.trailer,
      moTa: thongTinPhim?.moTa,
      ngayKhoiChieu: thongTinPhim?.ngayKhoiChieu,
      dangChieu: thongTinPhim?.dangChieu,
      sapChieu: thongTinPhim?.sapChieu,
      hot: thongTinPhim?.hot === null ? false : true,
      danhGia: thongTinPhim?.danhGia,
      hinhAnh: null,
      maNhom: thongTinPhim?.maNhom,
    },
    onSubmit: (values, { resetForm }) => {
      // vì post có dữ liệu uploadFile nên ta cần tạo 1 formData
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          // bởi vì hinhAnh ko thay đổi thì file vẫn giữ giá trị cũ nên ko cần push lên(ở đây giá trị là null)
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(editMovie(formData));
      setImgSrc("");
      resetForm();
    },
  });

  // handleInput
  const { setFieldValue } = formik;

  const handleChangeDatePicker = (value) => {
    const ngayKhoiChieui = moment(value);
    setFieldValue("ngayKhoiChieu", ngayKhoiChieui);
  };
  //
  const handleChangeSetFieldValue = (name) => {
    return (value) => {
      setFieldValue(name, value);
    };
  };
  //
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    const typeFile = ["image/jpeg", "image/jpg", "image/gif", "image/png"];
    if (typeFile.includes(file.type)) {
      // lưu file vào formik
      await setFieldValue("hinhAnh", file);
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      return;
    }
    alert("File chọn không phải kiểu hình ảnh");
  };

  return {
    formik,
    imgSrc,
    handleChangeDatePicker,
    handleChangeSetFieldValue,
    handleChangeFile,
    thongTinPhim,
  };
};
