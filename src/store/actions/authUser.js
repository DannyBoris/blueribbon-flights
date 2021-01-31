import { CURRENT_USER } from "../actionTypes";
import { addError } from "./error";

export const authUser = (coords) => (dispatch) => {
  // "Authentication" and "Token" in session storage for auto auth"
  const correctUser = "user";
  const correctPassword = "password";
  const { user, password } = coords;

  if (correctUser === user && correctPassword === password) {
    sessionStorage.setItem('CURRENT_USER', JSON.stringify(coords))
    dispatch({ type: CURRENT_USER, payload: coords });
    return coords
  } else {
    dispatch(addError("Wrong! Please try again."));
    return null
  
  }
};
