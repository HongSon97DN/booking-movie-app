import {
  DatePicker,
  Form,
  InputNumber,
  Radio,
  Select,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCalendar,
  getInfoMovie,
} from "../../../../redux/actions/MovieManagerAction";
import { bothServiceToken } from "../../../../Service/BothTokenService";
const ShowtimeAdmin = (props) => {

  const dispatch = useDispatch();
  const { thongTinPhim } = useSelector((state) => state.MovieManagerReducer);
  const [state, setState] = useState({
    heThongRap: [],
    cumRap: [],
  });
  const getCinema = async () => {
    try {
      let result = await bothServiceToken.get(
        "QuanLyRap/LayThongTinHeThongRap"
      );
      setState({
        ...state,
        heThongRap: result.data.content,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getCinema();
    dispatch(getInfoMovie(props.match.params.maPhim));
  }, []);
  //Formik
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.maPhim,
      ngayChieuGioChieu: "string",
      maRap: "string",
      giaVe: 0,
    },
    onSubmit: (value) => {
      dispatch(createCalendar (value));
    },
  });
  const { setFieldValue, handleSubmit } = formik;
  // đổi giá trị để vì option antd nhận label và value
  const heThongRapConvert = (arr) => {
    return state.heThongRap?.map((cinema, index) => {
      return {
        label: cinema.tenHeThongRap,
        value: cinema.maHeThongRap,
      };
    });
  };
  const cumRapConvert = (arr) => {
    return state.cumRap?.map((cinema, index) => {
      return {
        label: cinema.tenCumRap,
        value: cinema.maCumRap,
      };
    });
  };
  // handleChange
  // thẻ của antd lấy ra các giá trị là value, option là object value và label
  const handleChangeHeThongRap = async (value) => {
    try {
      const { data } = await bothServiceToken.get(
        `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`
      );
      setState({
        ...state,
        cumRap: data.content,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChangeMaRap = (value) => {
    setFieldValue("maRap", value);
  };
  const handleChangeNgayChieu = (value) => {
    setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const handleChangeGiaVe = (value) => {
    setFieldValue("giaVe", value);
  };
  //
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <h2
        className="font-weight-bold text-center"
        style={{ borderBottom: "1px solid #000", paddingBottom: "14px" }}
      >
        Tạo lịch chiếu cho phim
      </h2>
      <div className="row">
        <div className="col-6">
          <h4>Tên phim :</h4>
          <div className="font-weight-bold text-center">
            <h5 className="text-danger">{thongTinPhim.tenPhim} </h5>( Mã:{" "}
            {thongTinPhim.maPhim} )
          </div>
          <div className="text-center mt-4">
            <img src={thongTinPhim.hinhAnh} style={{width:"250px",height:"250px"}}alt="" />
          </div>
        </div>
        <div className="col-6">
          <Form
            labelCol={{
              span: 8,
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
            onSubmitCapture={handleSubmit}
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Hệ thống rạp">
              <Select
                options={heThongRapConvert()}
                onChange={handleChangeHeThongRap}
              />
            </Form.Item>

            <Form.Item label="Cụm rạp">
              <Select
                options={cumRapConvert()}
                name="maRap"
                onChange={handleChangeMaRap}
              />
            </Form.Item>

            <Form.Item label="Chọn ngày giờ chiếu">
              <DatePicker
                onOk={handleChangeNgayChieu}
                onChange={handleChangeNgayChieu}
                allowClear={false}
                showTime
                format={"DD/MM/YYYY HH:mm:ss"}
              />
            </Form.Item>
            <Form.Item label="Giá vé">
              <InputNumber name="giaVe" onChange={handleChangeGiaVe} />
            </Form.Item>
            <Form.Item label="Tác vụ">
              <button type="submit" className="btn btn-success p-2">
                + Tạo lịch chiếu
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default ShowtimeAdmin;
