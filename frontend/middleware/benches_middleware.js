import * as Actions from "../actions/bench_actions.js";
import * as filterActions from "../actions/filter_acitons.js";
import * as API from "../util/bench_api_util.js";

const BenchesMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  switch (action.type) {
    case Actions.BenchConstants.REQUEST_BENCHES:
      success = (benches) => {
        dispatch(Actions.receiveBenches(benches));};
      const filters = getState().filters;
      API.fetchBenches(filters, success);
      break;
    case filterActions.FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(Actions.requestBenches());
      break;
    case Actions.BenchConstants.CREATE_BENCH:
      success = (bench) => {
      dispatch(Actions.receiveBench(bench));};
      API.createBench(action.benchData, success);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
