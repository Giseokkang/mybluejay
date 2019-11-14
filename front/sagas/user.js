import {
  take,
  takeEvery,
  takeLatest,
  put,
  fork,
  call,
  delay,
  all
} from "redux-saga/effects";
import axios from "axios";
import { signUp, SIGN_UP } from "../reducers/members";
import {
  logInSuccess,
  logInRequest,
  logInFailue,
  logOutRequest,
  logOutFailure,
  logOutSuccess,
  loadUserRequest,
  loadUserFailure,
  loadUserSuccess
} from "../reducers/user";
import Router from "next/router";

function loginAPI(loginData) {
  return axios.post("api/user/login", loginData, {
    withCredentials: true
  });
}

function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.payload);
    yield put(logInSuccess(result.data));
    yield call(Router.push, "/");
  } catch (e) {
    console.log(e);
    yield put(logInFailue(e));
  }
}

function* watchLogin() {
  yield takeLatest(logInRequest().type, logIn);
}

function logOutAPI() {
  return axios.post(
    "api/user/logout",
    {},
    {
      withCredentials: true
    }
  );
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put(logOutSuccess());
  } catch (e) {
    console.log(e);
    yield put(logOutFailure(e));
  }
}

function* watchLogOut() {
  yield takeLatest(logOutRequest().type, logOut);
}

function loadUserAPI() {
  return axios.get("api/user", {
    withCredentials: true
  });
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put(loadUserSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadUserFailure(e));
  }
}

function* watchLoadUser() {
  yield takeLatest(loadUserRequest().type, loadUser);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchLoadUser)]);
}
