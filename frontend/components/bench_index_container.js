import BenchIndex from "./bench_index.jsx";
import {connect} from "react-redux";
import * as Actions from "../actions/bench_actions.js";

const mapStateToProps = (state) => ({
  benches: state.benches
});

const mapDispatchToProps = (dispatch) => ({
  requestBenches: () => dispatch(Actions.requestBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
