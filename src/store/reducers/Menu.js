import * as ACTIONS from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: true,
  details: null
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DETAILS_SUCCESS:
      return {
        ...state,
        details: action.details,
        loading: false
      };
    case ACTIONS.DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case ACTIONS.LOGOUT_SUCCESS:
      return {};
    case ACTIONS.LOGOUT_FAILURE:
      return {};
    case ACTIONS.CHANGE_PASSWORD_SUCCESS:
      return { ...state, loading: false };
    case ACTIONS.CHANGE_PASSWORD_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ACTIONS.LOGOUT_START:
    case ACTIONS.DETAILS_START:
    case ACTIONS.CHANGE_PASSWORD_START:
      return { ...state, loading: true, error: null };
    default:
      return { ...state };
  }
};
