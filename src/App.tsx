import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRouter from "./components/Layout/PrivateRouter";
import AdminLayout from "./components/Layout/AdminLayout";
import Login from "./features/login/index";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./utils";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "1300px",
    margin: "0 auto",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRouter path="/">
          <AdminLayout />
        </PrivateRouter>
        <Route>Not found</Route>
      </Switch>
    </Box>
  );
}

export default App;
