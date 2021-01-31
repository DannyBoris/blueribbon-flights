import {  ADD_FLIGHT, FETCH_FLIGHTS } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return [...state];
    case ADD_FLIGHT:
      return [...state, action.payload];
    default:
      return []
  }
};
