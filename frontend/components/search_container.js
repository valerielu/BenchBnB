import Search from "./search.jsx";
import {connect} from "react-redux";
import {requestBenches} from "../actions/bench_actions.js";
import {updateBounds} from "../actions/filter_acitons.js";

const mapStateToProps = (state) => ({
  benches: state.benches
});

const mapDispatchToProps = (dispatch) => ({
  requestBenches: () => dispatch(requestBenches()),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
