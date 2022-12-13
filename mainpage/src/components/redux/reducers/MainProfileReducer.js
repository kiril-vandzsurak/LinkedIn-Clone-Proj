import { PROFILE_DETAILS } from "../actions";
import { GET_EXPERIENCE_DETAILS } from "../actions";
import { SET_EXPERIENCE_POST } from "../actions";
const initialstate = {
  profilename: [],
  experience: [],
  toPost: [],
};

const profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case PROFILE_DETAILS:
      return {
        ...state,
        profilename: action.payload,
      };
    case GET_EXPERIENCE_DETAILS:
      return {
        ...state,
        experience: action.payload,
      };
    case SET_EXPERIENCE_POST:
      return {
        ...state,
        toPost: [...state.toPost, action.payload],
      };

    default:
      return state;
  }
};

export default profileReducer;
