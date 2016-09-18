import * as Actions from "../actions/bench_actions.js";
import merge from "lodash/merge";

const BenchesReducer = (state = [], action) => {
  switch (action.type) {
    case Actions.BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    case Actions.BenchConstants.RECEIVE_BENCH:
      return [...state, action.bench];
    default:
      return state;
  }
};

export default BenchesReducer;
