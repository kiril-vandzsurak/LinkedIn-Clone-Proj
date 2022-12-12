import { GET_PEOPLE_DATA } from "../actions";

const initialState = {
  content: [],
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_DATA:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getData;
