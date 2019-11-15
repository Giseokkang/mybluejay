import { all, fork } from "redux-saga/effects";
import membersSaga from "./members";
import userSaga from "./user";
import postSaga from "./post";
import othersSaga from "./others";

export default function* rootSaga() {
  yield all([
    fork(membersSaga),
    fork(userSaga),
    fork(postSaga),
    fork(othersSaga)
  ]);
}
