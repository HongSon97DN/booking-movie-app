import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { MA_NHOM } from "../../../../utils/setting";
import { useDispatch } from "react-redux";
import { uploadMovie } from "../../../../redux/actions/MovieManagerAction";
export const useAddMovie = () => {
  const dispatch = useDispatch();
  let [imgSrc, setImgSrc] = useState("");

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  //   formik
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: true,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: MA_NHOM,
    },
    onSubmit: (values, { resetForm }) => {
      // vì post có dữ liệu uploadFile nên ta cần tạo 1 formData
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      dispatch(uploadMovie(formData));
      setImgSrc("")
      resetForm();
    },
  });
  return {
    formik,
    imgSrc,
    setImgSrc,
  };
};
