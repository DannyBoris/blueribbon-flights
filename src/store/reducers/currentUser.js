import {CURRENT_USER} from '../actionTypes'

const DEFAULT_STATE = {
  user: {},
  isLogged: false,
};
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        user: action.payload,
        isLogged: true,
      };
    default:
      return DEFAULT_STATE;
  }
};
