import { PROFILE_DETAILS } from "../actions";
const initialstate = {
  profilename: [],
};

const profileReducer = (state = initialstate, action) => {
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

export default profileReducer