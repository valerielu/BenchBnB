import BenchesReducer from "./benches_reducer.js";
import FiltersReducer from "./filter_reducer.js";
import SessionReducer from "./session_reducer.js";
import {combineReducers} from "redux";

const RootReducer = combineReducers(
  {
    benches: BenchesReducer,
    filters: FiltersReducer,
    session: SessionReducer
  }
);

export default RootReducer;
