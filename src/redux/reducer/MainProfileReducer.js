import { PROFILE_DETAILS } from "../action";
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
    default:
      return state;
  }
};
