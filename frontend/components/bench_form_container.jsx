import {connect} from "react-redux";
import BenchForm from "./bench_form.jsx";
import * as BenchActions from "../actions/bench_actions.js";

const mapStateToProps = (state, ownProps) => ({
  lat: ownProps.location.query.lat,
  lng: ownProps.location.query.lng
});

const mapDispatchToProps = (dispatch) => ({
  createBench: (benchData) => (dispatch(BenchActions.createBench(benchData)))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);
