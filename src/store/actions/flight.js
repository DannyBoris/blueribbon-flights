import { ADD_FLIGHT, FETCH_FLIGHTS } from "../actionTypes";

export function addFlight(newFlight) {
  return {
    type: ADD_FLIGHT,
    payload: newFlight,
  };
}

export function fetchFlights(term) {
  return {
    type: FETCH_FLIGHTS,
    payload:term
  };
}
