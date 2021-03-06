import * as ACTIONS from "../actions/actionTypes";
import moment from "moment";

const initialState = {
  error: null,
  isLoadingStaffMembers: false,
  loading: true,
  details: null,
  staffMembers: [],
  permissionSets: []
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
    case ACTIONS.ADD_STAFF_SUCCESS:
      console.log("I am in staff dsuccess", action);
      return { ...state, loading: false, error: null };
    case ACTIONS.CHANGE_PASSWORD_FAILURE:
    case ACTIONS.ADD_STAFF_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ACTIONS.STAFF_MEMBERS_FAILURE:
    case ACTIONS.DISABLE_STAFF_FAILURE:
    case ACTIONS.ENABLE_STAFF_FAILURE:
    case ACTIONS.PERMISSION_LOOKUP_FAILURE:
      return { ...state, isLoadingStaffMembers: false, error: action.error };
    case ACTIONS.STAFF_MEMBERS_SUCCESS:
      return {
        ...state,
        isLoadingStaffMembers: false,
        staffMembers: manipulateStaffData(action.staffMembers)
      };
    case ACTIONS.DISABLE_STAFF_SUCCESS:
      return {
        ...state,
        isLoadingStaffMembers: false,
        staffMembers: statusUpdateInStaff(
          action.staffMembers,
          action.identityId,
          "disabled"
        )
      };
    case ACTIONS.ENABLE_STAFF_SUCCESS:
      return {
        ...state,
        isLoadingStaffMembers: false,
        staffMembers: statusUpdateInStaff(
          action.staffMembers,
          action.identityId,
          "confirmed"
        )
      };
    case ACTIONS.PERMISSION_LOOKUP_SUCCESS:
      return {
        ...state,
        permissionSets: mapPermissionSets(action.permissionSets)
      };
    case ACTIONS.PERMISSION_LOOKUP_START:
      return { ...state };
    case ACTIONS.STAFF_MEMBERS_START:
    case ACTIONS.DISABLE_STAFF_START:
    case ACTIONS.ENABLE_STAFF_START:
      return { ...state, isLoadingStaffMembers: true, error: null };
    case ACTIONS.LOGOUT_START:
    case ACTIONS.DETAILS_START:
    case ACTIONS.CHANGE_PASSWORD_START:
    case ACTIONS.ADD_STAFF_START:
      return { ...state, loading: true, error: null };
    default:
      return { ...state };
  }
};

const manipulateStaffData = staffMembers => {
  if (staffMembers.length) {
    return staffMembers.map(staff => {
      return {
        name: `${staff.firstName} ${staff.lastName}`,
        email: staff.email,
        cognitoSub: staff.cognitoSub,
        tags: [staff.status],
        created: moment
          .utc(staff.created)
          .local()
          .format()
      };
    });
  } else return [];
};

const statusUpdateInStaff = (staffMembers, identityId, status) => {
  const staff = staffMembers.map(staff => {
    console.log("skjskdjf", staff.cognitoSub, identityId);
    if (staff.cognitoSub === identityId) {
      return { ...staff, tags: [status] };
    } else return { ...staff };
  });
  console.log("Staff updated...", staff);
  return staff;
};

const mapPermissionSets = permissionSets => {
  return permissionSets.map(set => {
    return {
      key: set.id,
      title: set.code,
      value: set.code
    };
  });
};
