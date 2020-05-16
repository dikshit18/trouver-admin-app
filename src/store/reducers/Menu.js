import * as ACTIONS from "../actions/actionTypes";
import checkSessionValidity from "../../utils/sessionManager";

const initialState = {
  error: null,
  loading: false,
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
    case ACTIONS.LOADING_DETAILS:
      console.log("Iam slso being caalled");
      return { ...state, loading: true, error: null };
    default:
      return { ...state };
  }
};
