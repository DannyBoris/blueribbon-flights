import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import Flights from "./Flights";
import AddFlight from "./AddFlight";
import { authUser } from "../store/actions/authUser";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    // user is saved in session storage so we can protect routes!
    let user = sessionStorage.getItem("CURRENT_USER");
    if (user) dispatch(authUser(JSON.parse(user)));
  }, []);
  //Error handler
  const { enqueueSnackbar } = useSnackbar();
  const error = useSelector((state) => state.error);
  useEffect(() => {
    error.error &&
      enqueueSnackbar(error.error, {
        variant: error.variant,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
  }, [error]);
  return (
    <Switch>
      <Route exact path="/" render={(props) => <LoginPage {...props} />} />
      <Route exact path="/flights" render={(props) => <Flights {...props} />} />
      <Route exact path="/add" render={(props) => <AddFlight {...props} />} />
    </Switch>
  );
}

export default withRouter(Main);
