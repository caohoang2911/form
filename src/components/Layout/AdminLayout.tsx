import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./../../features/dashboard/index";

interface Props {}

const AdminLayout = (props: Props) => {
  return (
    <Switch>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default AdminLayout;
