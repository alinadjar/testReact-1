import { combineReducers } from "redux";
import doubleReducer from "./doubleReducer";

export default combineReducers({
    dbl: doubleReducer
});