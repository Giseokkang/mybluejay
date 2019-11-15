import { takeLatest, put, call, all, fork } from "redux-saga/effects";
import {
  loadOtherRequest,
  loadOtherFailure,
  loadOtherSuccess
} from "../reducers/others";
import axios from "axios";

function loadOtherAPI(nickname) {
  return axios.get(`/api/user/${nickname}`);
}

function* loadOther(action) {
  try {
    const result = yield call(loadOtherAPI, action.payload);
    yield put(loadOtherSuccess(result.data));
  } catch (e) {
    yield loadOtherFailure(e);
  }
}

function* watchLoadOther() {
  yield takeLatest(loadOtherRequest().type, loadOther);
}

export default function* othersSaga() {
  yield all([fork(watchLoadOther)]);
}
