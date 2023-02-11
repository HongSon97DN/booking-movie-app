import { DatePicker, Form, Input, InputNumber, Radio, Switch } from "antd";
import React, { useState } from "react";
import moment from "moment";
import { useAddMovie } from "./useAddMovie";
const AddMovie = () => {
  const { formik, imgSrc, setImgSrc } = useAddMovie();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const { handleSubmit, handleChange, setFieldValue, values } = formik;
  //
  const handleChangeDatePicker = (value) => {
    const ngayKhoiChieui = moment(value).format("DD/MM/YYYY");
    setFieldValue("ngayKhoiChieu", ngayKhoiChieui);
  };
  //
  const handleChangeSetFieldValue = (name) => {
    return (value) => {
      setFieldValue(name, value);
    };
  };
  //
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    const typeFile = ["image/jpeg", "image/jpg", "image/gif", "image/png"];
    if (typeFile.includes(file.type)) {
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      setFieldValue("hinhAnh", file);
      return;
    }
    alert("File chọn không phải kiểu hình ảnh");
  };
  //

  return (
    <Form
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
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên Phim">
        <Input name="tenPhim" value={values.tenPhim} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" value={values.trailer} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" value={values.moTa} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Ngày Khởi Chiếu">
        <DatePicker
          className="w-50"
          format={"DD/MM/YYYY"}
          name="ngayKhoiChieu"
          onChange={handleChangeDatePicker}
        />
      </Form.Item>

      <Form.Item label="Tình trạng">
        <select
          className="p-2 border-0 w-50"
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

      <Form.Item label="Hot">
        <Switch name="hot" onChange={handleChangeSetFieldValue("hot")} />
      </Form.Item>
      <Form.Item label="Số sao">
        <InputNumber
          value={values.danhGia}
          className="w-50"
          onChange={handleChangeSetFieldValue("danhGia")}
        />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type="file" onChange={handleChangeFile} name="hinhAnh" />
        <img src={imgSrc} style={{ width: "200px", height: "200px" }} alt="" />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="btn btn-success">
          Thêm phim
        </button>
      </Form.Item>
    </Form>
  );
};
export default AddMovie;
