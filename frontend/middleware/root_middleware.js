import BenchesMiddleware from "./benches_middleware.js";
import {applyMiddleware} from "redux";
import SessionMiddleware from "./session_middleware.js";

const RootMiddleware = applyMiddleware(BenchesMiddleware, SessionMiddleware);

export default RootMiddleware;
