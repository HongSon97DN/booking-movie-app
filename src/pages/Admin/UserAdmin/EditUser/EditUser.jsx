import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, Input, Radio, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  getInfoUser,
  getTypeUser,
} from "../../../../redux/actions/UserManagerAction";
export default function EditUser(props) {
  const { userInfo } = useSelector((state) => state.UserManagerReducer);
  const { userProfile } = useSelector((state) => state.FormReducer);
  console.log(userProfile)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoUser(props.match.params.taiKhoan));
  }, []);

  const formik = useFormik({
    // bật enableReinitialize khi thế giá trị bằng props nên dùng chỉ cho trang Edit
    enableReinitialize: true,
    initialValues: {
      taiKhoan: userInfo?.taiKhoan,
      matKhau: userInfo?.matKhau,
      email: userInfo?.email,
      soDT: userInfo?.soDT,
      maNhom: userInfo?.maNhom,
      maLoaiNguoiDung: userInfo?.maLoaiNguoiDung,
      hoTen: userInfo?.hoTen,
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(editUser(values));
      resetForm();
    },
  });
  const { handleSubmit, handleChange, setFieldValue, values } = formik;
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
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
      <Form.Item label={<h6 className="font-weight-bold m-0">Tài khoản</h6>}>
        <Input
          disabled={true}
          name="taiKhoan"
          value={values.taiKhoan}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label={<h6 className="font-weight-bold m-0">Mật khẩu</h6>}>
        <Input
          name="matKhau"
          type="password"
          value={values.matKhau}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label={<h6 className="font-weight-bold m-0">Email</h6>}>
        <Input name="email" value={values.email} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label={<h6 className="font-weight-bold m-0">Số điện thoại</h6>}
      >
        <Input
          name="soDt"
          value={values.soDT}
          className="form-control w-50"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label={<h6 className="font-weight-bold m-0">Mã nhóm</h6>}>
        <Input name="maNhom" value={values.maNhom} onChange={handleChange} />
      </Form.Item>
      <Form.Item
        label={<h6 className="font-weight-bold m-0">Mã loại người dùng</h6>}
      >
        <select
          className="form-control"
          name="maLoaiNguoiDung"
          onChange={handleChange}
          value={values?.maLoaiNguoiDung}
        >
          <option value="KhachHang">KhachHang</option>
          <option value="QuanTri">QuanTri</option>
        </select>
      </Form.Item>
      <Form.Item label={<h6 className="font-weight-bold m-0">Họ và tên</h6>}>
        <Input name="hoTen" value={values.hoTen} onChange={handleChange} />
      </Form.Item>

      <Form.Item label={<h6 className="font-weight-bold m-0">Tác vụ</h6>}>
        <button type="submit" className="btn btn-success">
          Cập nhật người dùng
        </button>
      </Form.Item>
    </Form>
  );
}
