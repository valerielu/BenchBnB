import {FilterConstants} from "../actions/filter_acitons.js";
import merge from "lodash/merge";

const FiltersReducer = (state = {bounds: {}}, action) => {
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      let newState = merge({}, state);
      newState.bounds = action.bounds;
      return newState;
    default:
      return state;
  }
};

export default FiltersReducer;
