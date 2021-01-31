import { ADD_ERROR } from "../actionTypes";

export function addError(error, variant = "error") {
  setTimeout(() => {
    return { type: ADD_ERROR, error: "", variant };
  }, 1000);
  return {
    type: ADD_ERROR,
    error,
    variant,
  };
}
