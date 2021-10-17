import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { RootState } from "../../app/store";

export default function PrivateRouter(props: RouteProps) {
  const auth = Boolean(localStorage.getItem("token"));
  if (!auth) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}
