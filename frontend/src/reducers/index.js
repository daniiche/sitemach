import { combineReducers } from "redux";
import machines from "./machines";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import item from "./item";

export default combineReducers({
    machines,
    item,
    errors,
    messages,
    auth 
});