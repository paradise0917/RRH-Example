import { createStore } from "redux";
import { ACTION_TYPES } from "../constants/actionTypes.constant";

const initState = {
  LightOn: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_LIGHTON:
      return {
        ...state,
        LightOn: !state.LightOn
      };
    default:
      return state;
  }
};

export default createStore(reducer);

