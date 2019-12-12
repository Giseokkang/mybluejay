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
import { logInSuccess, logInRequest } from "../reducers/user";
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
    yield put(logInRequest(result.data));

    yield put(signUpSuccess());
  } catch (e) {
    yield put(signUpFailure(e.response.data));
  }
}

function* withdraw() {
  try {
    // yield call(withdrawAPI)
    yield delay(2000);
    yield put(withdrawSuccess());
  } catch (e) {
    yield put(withdrawFailure(e));
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
