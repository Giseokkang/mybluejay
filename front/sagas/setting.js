// import { takeLatest } from "redux-saga/effects";
// import { offSetting } from "../reducers/setting";

// function* logIn(action) {
//     try {
//       const result = yield call(loginAPI, action.payload);
//       yield put(logInSuccess(result.data));
//       yield call(Router.push, "/");
//     } catch (e) {
//       console.log(e);
//       yield put(logInFailue(e));
//     }
//   }

//   function* watchOffSetting() {
//     yield takeLatest(offSetting().type, logIn);
//   }
