import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Button,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Paper,
  makeStyles,
  TableBody,
  Typography,
  Input,
} from "@material-ui/core";
import FlightRow from "../component/FlightRow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 30,
  },
  headerRow: {
    "& > th": {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
  },
  addButton: {
    padding: 15,
    margin: 10,
  },
}));

export default function Flights({ history }) {
  // tried to create protected route but logged is false here altho true in redux devtools
  // const logged = useSelector((state) => state.currentUser.isLogged);
  // useEffect(() => {
  //   setTimeout(() => {
  //     !logged && history.push('/')
  //   }, 1000);
  // }, []);
  const headerRow = ["From", "To", "Depart Time", "Arrival Time", "Price"];
  const flights = useSelector((state) => state.flights);
  const classes = useStyles();
  const [term, setTerm] = useState("");
  const [flighsToDisplay, setFlighsToDisplay] = useState(flights);
  useEffect(() => {
    setFlighsToDisplay([...flights].filter((f) => f.to.includes(term)));
  }, [term, flights]);
  return (
    <div className={classes.root}>
      {flights[0] && (
        <Input
          fullWidth
          style={{
            border: "1px solid",
            borderRadius: 9,
            padding: 6,
            marginBottom: 10,
          }}
          disableUnderline
          value={term}
          placeholder="Search Destination..."
          onChange={(e) => setTerm(e.target.value)}
          endAdornment={<SearchIcon />}
        />
      )}
      {flighsToDisplay.length ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className={classes.headerRow}>
                {headerRow.map((item) => (
                  <TableCell>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {flighsToDisplay.map((f) => (
                <FlightRow
                  from={f.from}
                  to={f.to}
                  depart={f.departTime}
                  arrival={f.landTime}
                  price={f.price}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h4">No flights currently</Typography>
      )}
      <Button
        onClick={() => history.push("/add")}
        startIcon={<AddCircleOutlineIcon />}
        variant="contained"
        color="secondary"
        className={classes.addButton}
      >
        Add a new flight
      </Button>
    </div>
  );
}
