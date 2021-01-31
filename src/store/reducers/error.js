import { ADD_ERROR } from "../actionTypes";

const DEFAULT_STATE = {
  error: "",
  variant: "error",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { error: action.error, variant: action.variant };
    default:
      return DEFAULT_STATE;
  }
};
