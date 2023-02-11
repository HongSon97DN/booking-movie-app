import React from 'react'
import styles from "../Login/login.module.css";
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { registerAction } from '../../redux/actions/FormAction';



export default function Register() {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      hoTen: '',
      xacNhanMK: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Username is not empty!"),
      matKhau: Yup.string().required("Password is not empty!")
      .min(6, 'Password must be have at least 6 characters'),
      xacNhanMK: Yup.string()
        .oneOf([Yup.ref('matKhau'), null], 'Password is not valid')
        .required("Password is not empty!"),
      email: Yup.string().required("Email is not empty!")
        .email("Email is not valid"),
      hoTen: Yup.string().required("Fullname is not empty!")
        .matches(/^[A-Z a-z]+$/, "Fullname is not valid"),
      soDt: Yup.string().required("Phone number is not empty!")
        .matches(/^[0-9]*$/, "Phone number must be contain only number")
    }),
    onSubmit: values => {
      let action = registerAction(values);
      dispatch(action);
    },
  });

  return (
    <div className={styles.login_box}>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className={styles.user_box}>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="taiKhoan" required />
              <label>Account</label>
              {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <span className='text-danger'>{formik.errors.taiKhoan}</span>
              ) : null}
            </div>
            <div className={styles.user_box}>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="matKhau" required />
              <label>Password</label>
              {formik.touched.matKhau && formik.errors.matKhau ? (
                <span className='text-danger'>{formik.errors.matKhau}</span>
              ) : null}
            </div>
            <div className={styles.user_box}>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="xacNhanMK" required />
              <label>Password Confirm</label>
              {formik.touched.xacNhanMK && formik.errors.xacNhanMK ? (
                <span className='text-danger'>{formik.errors.xacNhanMK}</span>
              ) : null}
            </div>
          </div>
          <div className="col-6">
            <div className={styles.user_box}>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="hoTen" required />
              <label>Username</label>
              {formik.touched.hoTen && formik.errors.hoTen ? (
                <span className='text-danger'>{formik.errors.hoTen}</span>
              ) : null}
            </div>
            <div className={styles.user_box}>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="email" required />
              <label>Email</label>
              {formik.touched.email && formik.errors.email ? (
                <span className='text-danger'>{formik.errors.email}</span>
              ) : null}
            </div>
            <div className={styles.user_box}>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="soDt" required />
              <label>Phone number</label>
              {formik.touched.soDt && formik.errors.soDt ? (
                <span className='text-danger'>{formik.errors.soDt}</span>
              ) : null}
            </div>
            <div className='btn_div'>
              <button type='submit' className="btn_movie">
                <span />
                <span />
                <span />
                <span />
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
