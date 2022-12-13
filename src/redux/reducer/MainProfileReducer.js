import { PROFILE_DETAILS, EDIT_PROFILE } from "../action";
const initialstate = {
  profilename: [],
};

export const profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case PROFILE_DETAILS:
      return {
        ...state,
        profilename: action.payload,
      };
    case EDIT_PROFILE: {
      return {
        ...state,
        profilename: action.payload,
      };
    }
    default:
      return state;
  }
};
