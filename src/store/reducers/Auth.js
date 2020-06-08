import * as ACTIONS from "../actions/actionTypes";
import { checkSessionValidity, sessionState } from "../../utils/sessionManager";

const initialState = {
  isLogin: checkSessionValidity(),
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
    case ACTIONS.LOGOUT_SUCCESS:
      return {};
    case ACTIONS.LOGOUT_FAILURE:
      return {};
    case ACTIONS.LOGIN_START:
    case ACTIONS.LOGOUT_START:
      return { ...state, loading: true, error: null };
    default:
      return { ...state };
  }
};
