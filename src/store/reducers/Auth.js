import * as ACTIONS from "../actions/actionTypes";
const initialState = {
  isLogin: false,
  forgotPassword: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true
      };
    case ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return { ...state };
  }
};
