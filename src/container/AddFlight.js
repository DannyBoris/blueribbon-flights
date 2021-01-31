import {
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addError } from "../store/actions/error";
import { addFlight } from "../store/actions/flight";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    border: "1px solid",
    borderRadius: 8,

    "& > div": {
      display: "flex",
      "& > div": {
        margin: 10,
      },
    },
  },
}));
export default function AddFlight({ history }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({
    from: "",
    to: "",
    departTime: "",
    landTime: "",
    price: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let allFieldsAreComplete = Object.values(form).every((field) =>
      Boolean(field)
    );
    if (!allFieldsAreComplete) dispatch(addError("Please fill out all fields"));
    else {
      dispatch(addFlight(form));
      // dispatch error removes the flights 
      enqueueSnackbar("Flight added succesfully", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      history.push("/flights");
    }
  }
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Typography variant="h4">Add a new flight</Typography>
      <div>
        <FormControl>
          <InputLabel>From</InputLabel>
          <Input
            fullWidth
            value={form.from}
            name="from"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>To</InputLabel>
          <Input value={form.to} name="to" onChange={handleChange} />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <InputLabel>Departure time​</InputLabel>
          <Input
            fullWidth
            value={form.departTime}
            name="departTime"
            onChange={handleChange}
            type="time"
          />
        </FormControl>
        <FormControl>
          <InputLabel>Landing time​,</InputLabel>
          <Input
            fullWidth
            value={form.landTime}
            name="landTime"
            onChange={handleChange}
            type="time"
          />
        </FormControl>
      </div>
      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input
          fullWidth
          value={form.price}
          name="price"
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add now!
      </Button>
    </form>
  );
}
