import { combineReducers } from "redux";
import axios from "axios";
import user from "./user";
import post from "./post";
import members from "./members";
import popUp from "./popUp";

axios.defaults.baseURL = "http://localhost:8000/";

const rootReducer = combineReducers({
  user,
  post,
  members,
  popUp
});

export default rootReducer;
