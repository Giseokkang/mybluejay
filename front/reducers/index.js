import { combineReducers } from "redux";
import axios from "axios";
import user from "./user";
import post from "./post";
import members from "./members";
import popUp from "./popUp";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;

const rootReducer = combineReducers({
  user,
  post,
  members,
  popUp
});

export default rootReducer;
