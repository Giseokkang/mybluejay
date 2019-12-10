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
  loadUserSuccess,
  followUserSuccess,
  followUserFailure,
  followUserRequest,
  unfollowUserSuccess,
  unfollowUserFailure,
  unfollowUserRequest,
  uploadBackgroundImageSuccess,
  uploadBackgroundImageFailure,
  uploadBackgroundImageRequest,
  uploadProfileImageSuccess,
  uploadProfileImageFailure,
  uploadProfileImageRequest,
  editUserSuccess,
  editUserFailure,
  editUserRequest,
  loadFollowRequest,
  loadFollowSuccess,
  loadFollowFailure
} from "../reducers/user";
import Router from "next/router";
import {
  loadOtherSuccess,
  loadOtherRequest,
  loadOtherFailure
} from "../reducers/user";

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
    yield put(logInFailue(e.response.data));
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

function followUserAPI(nickname) {
  return axios.post(
    `api/user/${nickname}/follow`,
    {},
    {
      withCredentials: true
    }
  );
}

function* followUser(action) {
  try {
    const result = yield call(followUserAPI, action.payload);
    yield put(followUserSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(followUserFailure(e));
  }
}

function* watchFollowUser() {
  yield takeLatest(followUserRequest().type, followUser);
}

function unfollowUserAPI(nickname) {
  return axios.post(
    `api/user/${nickname}/unfollow`,
    {},
    {
      withCredentials: true
    }
  );
}

function* unfollowUser(action) {
  try {
    const result = yield call(unfollowUserAPI, action.payload);
    yield put(unfollowUserSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(unfollowUserFailure(e));
  }
}

function* watchUnFollowUser() {
  yield takeLatest(unfollowUserRequest().type, unfollowUser);
}

function loadFollowAPI(nickname) {
  return axios.post(`api/user/${nickname}/load/follow`);
}

function* loadFollow(action) {
  try {
    const result = yield call(loadFollowAPI, action.payload);
    yield put(loadFollowSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadFollowFailure(e));
  }
}

function* watchLoadFollow() {
  yield takeLatest(loadFollowRequest().type, loadFollow);
}

function uploadBackgroundImageAPI(formData) {
  return axios.post(`api/user/upload/background`, formData, {
    withCredentials: true
  });
}

function* uploadBackgroundImage(action) {
  try {
    const result = yield call(uploadBackgroundImageAPI, action.payload);
    yield put(uploadBackgroundImageSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(uploadBackgroundImageFailure(e));
  }
}

function* watchUploadBackgroundImage() {
  yield takeLatest(uploadBackgroundImageRequest().type, uploadBackgroundImage);
}

function uploadProfileImageAPI(formData) {
  return axios.post(`api/user/upload/avatar`, formData, {
    withCredentials: true
  });
}

function* uploadProfileImage(action) {
  try {
    const result = yield call(uploadProfileImageAPI, action.payload);
    yield put(uploadProfileImageSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(uploadProfileImageFailure(e));
  }
}

function* watchUploadProfileImage() {
  yield takeLatest(uploadProfileImageRequest().type, uploadProfileImage);
}

function editUserAPI(data) {
  return axios.post(`api/user/edit`, data, {
    withCredentials: true
  });
}

function* editUser(action) {
  try {
    const result = yield call(editUserAPI, action.payload);
    yield put(editUserSuccess(result.data));
    yield put(loadUserRequest());
  } catch (e) {
    console.log(e);
    yield put(editUserFailure(e));
  }
}

function* watchEditUser() {
  yield takeLatest(editUserRequest().type, editUser);
}

function loadOtherAPI(nickname) {
  return axios.get(`/api/user/${nickname}`);
}

function* loadOther(action) {
  try {
    const result = yield call(loadOtherAPI, action.payload);
    yield put(loadOtherSuccess(result.data));
  } catch (e) {
    yield put(loadOtherFailure(e));
  }
}

function* watchLoadOther() {
  yield takeLatest(loadOtherRequest().type, loadOther);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchFollowUser),
    fork(watchUnFollowUser),
    fork(watchLoadFollow),
    fork(watchUploadBackgroundImage),
    fork(watchUploadProfileImage),
    fork(watchEditUser),
    fork(watchLoadOther)
  ]);
}
