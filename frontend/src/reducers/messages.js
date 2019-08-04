import {CREATE_MESSAGE} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      let newState = action.payload;
      return (newState);
    default:
      return state;
  };
};
