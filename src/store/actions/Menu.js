import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import { apiEndpoints } from "../../utils/constants";
import { getCookie, deleteAllCookies } from "../../utils/cookies";

const detailsSuccess = details => {
  return {
    type: ACTIONS.DETAILS_SUCCESS,
    details
  };
};
const detailsFailure = error => {
  return {
    type: ACTIONS.DETAILS_FAILURE,
    error
  };
};
const detailsStart = () => {
  return {
    type: ACTIONS.DETAILS_START
  };
};

export const details = () => {
  return dispatch => {
    dispatch(detailsStart());
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    axios
      .get(apiEndpoints.details, config)
      .then(data => {
        if (data.data.statusCode === 200) {
          const { details } = data.data;
          dispatch(detailsSuccess(details));
        }
      })
      .catch(error => {
        dispatch(detailsFailure(error));
      });
  };
};

const changePasswordSuccess = () => {
  return {
    type: ACTIONS.CHANGE_PASSWORD_SUCCESS
  };
};
const changePasswordFailure = error => {
  return {
    type: ACTIONS.CHANGE_PASSWORD_FAILURE,
    error
  };
};
const changePasswordStart = () => {
  return {
    type: ACTIONS.CHANGE_PASSWORD_START
  };
};

export const changePassword = values => {
  return dispatch => {
    dispatch(changePasswordStart());
    const { oldPassword, newPassword } = values;
    const sessionId = getCookie("sessionId");
    const idToken = getCookie("idToken");
    const payload = { sessionId, oldPassword, newPassword };
    const config = {
      headers: { Authorization: idToken }
    };
    axios
      .post(apiEndpoints.changePassword, payload, config)
      .then(data => {
        dispatch(changePasswordSuccess());
      })
      .catch(error => dispatch(changePasswordFailure(error)));
  };
};

export const staffUsersSuccess = data => {
  return {
    type: ACTIONS.STAFF_MEMBERS_SUCCESS,
    staffMembers: data
  };
};
export const staffUsersFailure = error => {
  return {
    type: ACTIONS.STAFF_MEMBERS_FAILURE,
    error
  };
};

export const staffUserStart = () => {
  return {
    type: ACTIONS.STAFF_MEMBERS_START
  };
};

export const staffUsers = () => {
  return dispatch => {
    dispatch(staffUserStart());
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    axios
      .get(
        /*apiEndpoints.staffMembers*/ "http://localhost:3001/staff/users"
        //  config
      )
      .then(data => {
        if (data.data.statusCode === 200) {
          const { staffMembers } = data.data;
          dispatch(staffUsersSuccess(staffMembers));
        }
      })
      .catch(error => {
        dispatch(staffUsersFailure(error));
      });
  };
};

export const disableStaffSuccess = (staffMembers, identityId) => {
  console.log("Disabling...", staffMembers, identityId);
  return {
    type: ACTIONS.DISABLE_STAFF_SUCCESS,
    staffMembers,
    identityId
  };
};
export const disableStaffFailure = error => {
  return {
    type: ACTIONS.DISABLE_STAFF_FAILURE,
    error
  };
};

export const disableStaffStart = () => {
  return {
    type: ACTIONS.DISABLE_STAFF_START
  };
};

export const disableStaff = identityId => {
  return (dispatch, getState) => {
    dispatch(disableStaffStart());
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    axios
      .get(
        /*apiEndpoints.staffMembers*/ `http://localhost:3001/staff/disable/${identityId} `
        //  config
      )
      .then(data => {
        if (data.data.statusCode === 200) {
          const { menu } = getState();
          const { staffMembers } = menu;
          dispatch(disableStaffSuccess(staffMembers, identityId));
        }
      })
      .catch(error => {
        dispatch(disableStaffFailure(error));
      });
  };
};

export const enableStaffSuccess = (staffMembers, identityId) => {
  return {
    type: ACTIONS.ENABLE_STAFF_SUCCESS,
    staffMembers,
    identityId
  };
};
export const enableStaffFailure = error => {
  return {
    type: ACTIONS.ENABLE_STAFF_FAILURE,
    error
  };
};

export const enableStaffStart = () => {
  return {
    type: ACTIONS.ENABLE_STAFF_START
  };
};

export const enableStaff = identityId => {
  return (dispatch, getState) => {
    dispatch(enableStaffStart());
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    axios
      .get(
        /*apiEndpoints.staffMembers*/ `http://localhost:3001/staff/enable/${identityId} `
        //  config
      )
      .then(data => {
        if (data.data.statusCode === 200) {
          const { menu } = getState();
          const { staffMembers } = menu;
          dispatch(enableStaffSuccess(staffMembers, identityId));
        }
      })
      .catch(error => {
        dispatch(enableStaffFailure(error));
      });
  };
};

export const addStaffSuccess = () => {
  return {
    type: ACTIONS.ADD_STAFF_SUCCESS
  };
};
export const addStaffFailure = error => {
  return {
    type: ACTIONS.ADD_STAFF_FAILURE,
    error
  };
};

export const addStaffStart = () => {
  return {
    type: ACTIONS.ADD_STAFF_START
  };
};

export const addStaff = ({ firstName, lastName, email }) => {
  return (dispatch, getState) => {
    dispatch(addStaffStart());
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    const payload = { firstName, lastName, email };
    axios
      .post(
        /*apiEndpoints.staffMembers*/ `http://localhost:3001/staff/signup`,
        payload
        //  config
      )
      .then(data => {
        if (data.data.statusCode === 201) {
          dispatch(addStaffSuccess());
          dispatch(staffUsers());
        }
      })
      .catch(error => {
        dispatch(addStaffFailure(error));
      });
  };
};

export const permissionLookUpStart = () => {
  return {
    type: ACTIONS.PERMISSION_LOOKUP_START
  };
};

export const permissionLookUpSuccess = permissionSets => {
  return {
    type: ACTIONS.PERMISSION_LOOKUP_SUCCESS,
    permissionSets
  };
};
export const permissionLookUpFailure = error => {
  return {
    type: ACTIONS.PERMISSION_LOOKUP_FAILURE,
    error
  };
};

export const fetchPermissionSets = () => {
  return (dispatch, getState) => {
    dispatch(permissionLookUpStart());
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    axios
      .get(
        /*apiEndpoints.staffMembers*/ `http://localhost:3001/shared/permission/permission/all`
      )
      .then(data => {
        if (data.data.statusCode === 200) {
          const { permissionSets } = data.data;
          dispatch(permissionLookUpSuccess(permissionSets));
        }
      })
      .catch(error => {
        dispatch(permissionLookUpFailure(error));
      });
  };
};
