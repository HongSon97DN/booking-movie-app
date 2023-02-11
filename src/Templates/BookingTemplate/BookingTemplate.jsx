import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/HeaderComponent/HeaderRFC";
import { ACCESS_TOKEN } from "../../utils/setting";

export default function BookingTemplate(props) {
  const { Component, ...rest } = props;
  //isLogin?
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    toast.warning("You must login first");
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Route
      {...rest}
      render={(propRoute) => {
        return (
          <Fragment>
            <Header {...propRoute} />
            <Component {...propRoute} />
          </Fragment>
        );
      }}
    />
  );
}
