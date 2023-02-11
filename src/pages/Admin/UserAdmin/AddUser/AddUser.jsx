import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, Input, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  getTypeUser,
} from "../../../../redux/actions/UserManagerAction";
import { Select } from "antd";
export default function AddUser(props) {
  const dispatch = useDispatch();
  const { userType } = useSelector((state) => state.UserManagerReducer);
  useEffect(() => {
    dispatch(getTypeUser());
  }, []);
  const renderTypeUser = () => {
    return userType.map((user) => {
      return {
        value: user.maLoaiNguoiDung,
        label: user.tenLoai,
      };
    });
  };
  const formik = useFormik({
    // bật enableReinitialize khi thế giá trị bằng props nên dùng chỉ cho trang Edit
    enableReinitialize: true,
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(createUser(values));
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
          value={values.soDt}
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
        {/* <Input
          value={values.maLoaiNguoiDung}
          onChange={handleChange}
        /> */}
        <Select
          defaultValue={"KhachHang"}
          name="maLoaiNguoiDung"
          placeholder="Chọn người dùng"
          optionFilterProp="children"
          onChange={(value) => {
            setFieldValue("maLoaiNguoiDung", value);
          }}
          options={renderTypeUser()}
        />
      </Form.Item>
      <Form.Item label={<h6 className="font-weight-bold m-0">Họ và tên</h6>}>
        <Input name="hoTen" value={values.hoTen} onChange={handleChange} />
      </Form.Item>

      <Form.Item label={<h6 className="font-weight-bold m-0">Tác vụ</h6>}>
        <button type="submit" className="btn btn-success">
          Thêm người dùng
        </button>
      </Form.Item>
    </Form>
  );
}
