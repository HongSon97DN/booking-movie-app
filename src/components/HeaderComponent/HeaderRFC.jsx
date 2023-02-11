import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { getUserInfoAction } from "../../redux/actions/FormAction";
import {
    LOGOUT,
    OPEN_LOGIN,
    OPEN_REGISTER,
    USER_LOGIN,
    USER_PROFILE,
} from "../../redux/types/FormType";
import "./header.css";

export default function Header() {
    const [active, setActive] = useState(false);
    const { uLogin } = useSelector((state) => state.FormReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        renderAccount();
    }, [uLogin]);

    const openModalLogin = () =>
        dispatch({ type: OPEN_LOGIN, modalLogin: <Login /> });
    const openModalRegister = () =>
        dispatch({ type: OPEN_REGISTER, modalRegister: <Register /> });
    const logout = () => dispatch({ type: LOGOUT });
    const goToProfile = () => {
        let action = getUserInfoAction();
        dispatch(action)
        setActive(false);
        // let userProfile = JSON.parse(localStorage.getItem(USER_LOGIN));
        // dispatch({ type: USER_PROFILE, userProfile: userProfile });
    };

    let renderAccount = () => {
        if (uLogin !== undefined) {
            // đã đăng nhập
            return (
                <div className="header_login">
                    <div className="header_user header_account" onClick={() => {
                        setActive(!active)
                    }}>{uLogin.hoTen}
                    </div>   
                    <div className="user_profile" style={{display:`${active ? "block" : "none"}`}}>
                        <NavLink onClick={() => {
                            goToProfile();
                        }} to="/profile" className="user_detail">User Profile</NavLink>
                        <NavLink onClick={() => {
                            logout();
                            setActive(false);
                        }} to="/home" className="user_logout">Log out</NavLink>
                    </div>             
                </div>       
            )
        } else {
            return (
                <>
                    <div
                        className="header_user"
                        onClick={() => {
                            openModalLogin();
                        }}
                    >
                        Login
                    </div>
                    <div
                        className="header_user"
                        onClick={() => {
                            openModalRegister();
                        }}
                    >
                        Register
                    </div>
                </>
            );
        }
    };

    return (
        <header className="nav__bg">
            <div className="container">
                <nav className="navbar navbar-expand-sm">
                    <NavLink className="navbar-brand" to="/home">
                        <img
                            className="img-fluid"
                            src="../../logo3.png"
                            alt=""
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse ml-5"
                        id="collapsibleNavId"
                    >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/admin">
                                    Admin
                                </NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">{renderAccount()}</div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
