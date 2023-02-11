import { DatePicker, Form, Input, InputNumber, Radio, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useEditMovie } from "./useEditMovie";
import { useDispatch } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";

const EditMovie = (props) => {
  const {
    formik,
    imgSrc,
    handleChangeDatePicker,
    handleChangeSetFieldValue,
    handleChangeFile,
    thongTinPhim,
  } = useEditMovie(props);
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const { handleSubmit, handleChange, setFieldValue, values } = formik;

  return (
    <>
      <div>
        <h2
          className="pb-3 text-center"
          style={{ borderBottom: "2px solid #000" }}
        >
          CẬP NHẬT PHIM:
          <span className="text-danger">{` ${values.maPhim}`}</span>
        </h2>
        <NavLink to="/admin/movieadmin">
          <button className="btn btn-info">Trở về trang Danh Sách Phim</button>
        </NavLink>
      </div>
      <Form
        className="mt-4"
        onSubmitCapture={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item
          label={<h6 className="font-weight-bold m-0">Form Size</h6>}
          name="size"
        >
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={<h6 className="font-weight-bold m-0">Tên Phim</h6>}>
          <Input
            name="tenPhim"
            value={values.tenPhim}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label={<h6 className="font-weight-bold m-0">Trailer Phim</h6>}
        >
          <Input
            name="trailer"
            value={values.trailer}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label={<h6 className="font-weight-bold m-0">Mô tả</h6>}>
          <Input name="moTa" value={values.moTa} onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label={<h6 className="font-weight-bold m-0">Ngày Khởi Chiếu</h6>}
        >
          <DatePicker
            className="w-50"
            format={"DD/MM/YYYY"}
            name="ngayKhoiChieu"
            allowClear={false}
            value={moment(values.ngayKhoiChieu)}
            onChange={handleChangeDatePicker}
          />
        </Form.Item>

        <Form.Item label={<h6 className="font-weight-bold m-0">Tình trạng</h6>}>
          <select
            className="w-50 p-2 border-0"
            defaultValue={"dangChieu"}
            name="tinhTrang"
            onChange={(e) => {
              let { value } = e.target;
              if (value === true) {
                setFieldValue("dangChieu", true);
                setFieldValue("sapChieu", false);
              } else {
                setFieldValue("dangChieu", false);
                setFieldValue("sapChieu", true);
              }
            }}
          >
            <option name="dangChieu" value={true}>
              Đang chiếu
            </option>
            <option name="sapChieu" value={false}>
              Sắp chiếu
            </option>
          </select>
        </Form.Item>

        <Form.Item label={<h6 className="font-weight-bold m-0">Hot</h6>}>
          <Switch
            name="hot"
            onChange={handleChangeSetFieldValue("hot")}
            checked={values.hot}
          />
        </Form.Item>
        <Form.Item label={<h6 className="font-weight-bold m-0">Số sao</h6>}>
          <InputNumber
            value={values.danhGia}
            className="w-50"
            onChange={handleChangeSetFieldValue("danhGia")}
          />
        </Form.Item>
        <Form.Item label={<h6 className="font-weight-bold m-0">Hình ảnh</h6>}>
          <input type="file" onChange={handleChangeFile} name="hinhAnh" />
          <img
            src={imgSrc === "" ? thongTinPhim.hinhAnh : imgSrc}
            style={{ width: "200px", height: "200px" }}
            alt=""
          />
        </Form.Item>
        <Form.Item label={<h6 className="font-weight-bold m-0">Tác vụ</h6>}>
          <button type="submit" className="btn btn-success">
            Cập Nhật Phim
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditMovie;
