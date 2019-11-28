import { combineReducers } from "redux";
import axios from "axios";
import user from "./user";
import post from "./post";
import members from "./members";
import popUp from "./popUp";
import others from "./others";
import setting from "./setting";

axios.defaults.baseURL = "http://localhost:8000/";

const rootReducer = combineReducers({
  user,
  post,
  members,
  popUp,
  others,
  setting
});

export default rootReducer;
