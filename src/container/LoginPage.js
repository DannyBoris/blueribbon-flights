import {
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../store/actions/authUser";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
    display: "flex",
    alignItemsL: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(3),
    height: "300px",
  },
}));

export default function LoginPage({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    user: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    let loginSuccess = dispatch(authUser(form));
    loginSuccess && history.push("/flights");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.root} elevation={9}>
        <Typography variant="h4">Login</Typography>
        <FormControl>
          <InputLabel>User</InputLabel>
          <Input value={form.user} name="user" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            value={form.password}
            name="password"
            onChange={handleChange}
          />
        </FormControl>
        <Button color="primary" type="submit" variant="contained">
          Login
        </Button>
      </Paper>
    </form>
  );
}
