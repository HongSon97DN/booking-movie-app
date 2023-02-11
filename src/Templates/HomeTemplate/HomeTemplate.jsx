import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/FooterComponent/FooterRFC";
import Header from "../../components/HeaderComponent/HeaderRFC";

export default function HomeTemplate(props) {
  const { Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(propRoute) => {
        return (
          <Fragment>
            <Header {...propRoute} />
            <Component {...propRoute} />
            <Footer {...propRoute} />
          </Fragment>
        );
      }}
    />
  );
}
