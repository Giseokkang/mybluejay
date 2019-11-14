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
import {
  signUpRequest,
  withdrawSuccess,
  signUpSuccess,
  signUpFailure,
  withdrawFailure
} from "../reducers/members";
import { logInSuccess } from "../reducers/user";
import Router from "next/router";

function signUpAPI(signUpData) {
  // API 전송
  return axios.post("api/user/signup", signUpData);
}

function withdrawAPI() {
  // API 전송
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.payload);
    yield put(signUpSuccess());
    const filteredResult = Object.assign({}, result.data);
    delete filteredResult.password;

    yield put(logInSuccess(filteredResult));
    yield call(Router.push, "/");
  } catch (e) {
    console.log(e);
    yield put(signUpFailure(e));
  }
}

function* withdraw() {
  try {
    // yield call(withdrawAPI)
    yield delay(2000);
    yield put(withdrawSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(withdrawFailure());
  }
}

function* watchSignUp() {
  yield takeLatest(signUpRequest().type, signUp);
}

function* watchWithdraw() {
  yield takeLatest(withdrawSuccess().type, withdraw);
}

export default function* membersSaga() {
  yield all([fork(watchSignUp), fork(watchWithdraw)]);
}
