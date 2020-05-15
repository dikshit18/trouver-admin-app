import * as ACTIONS from "../actions/actionTypes";
const initialState = {
  isLogin: /*checkSessionValidity() */ false,
  forgotPassword: false,
  error: null,
  loading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        loading: false
      };
    case ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case ACTIONS.LOADING_START:
      return { ...state, loading: true, error: null };
    case ACTIONS.LOGOUT:
      return initialState;
    default:
      return { ...state };
  }
};
