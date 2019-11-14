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
import {
  addPostRequest,
  addPostSuccess,
  addPostFailure,
  loadMainPostsRequest,
  loadMainPostsFailure,
  loadMainPostsSuccess,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
  loadPostRequest,
  loadPostSuccess,
  loadPostFailure
} from "../reducers/post";
import axios from "axios";

function addPostAPI(addPostData) {
  // API 전송
  return axios.post("/api/post/upload", addPostData, { withCredentials: true });
}

function* addPost(action) {
  try {
    yield call(addPostAPI, action.payload);
    yield put(addPostSuccess());
    yield put(loadMainPostsRequest());
  } catch (e) {
    console.log(e);
    yield put(addPostFailure(e));
  }
}

function* watchAddPost() {
  yield takeLatest(addPostRequest().type, addPost);
}

function loadMainPostsAPI() {
  // API 전송
  return axios.get("/api/post/posts");
}

function* loadMainPosts() {
  try {
    const result = yield call(loadMainPostsAPI);
    yield put(loadMainPostsSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadMainPostsFailure(e));
  }
}

function* watchLoadMainPosts() {
  yield takeLatest(loadMainPostsRequest().type, loadMainPosts);
}

function loadPostAPI(id) {
  // API 전송
  return axios.get(`/api/post/${id}`, {
    withCredentials: true
  });
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.payload);
    yield put(loadPostSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadPostFailure(e));
  }
}

function* watchLoadPost() {
  yield takeLatest(loadPostRequest().type, loadPost);
}

function deletePostAPI(id) {
  // API 전송
  return axios.post(`/api/post/${id}/delete`, {
    withCredentials: true
  });
}

function* deletePost(action) {
  try {
    yield call(deletePostAPI, action.payload);
    yield put(deletePostSuccess(action.payload));
  } catch (e) {
    console.log(e);
    yield put(deletePostFailure(e));
  }
}

function* watchDeletePost() {
  yield takeLatest(deletePostRequest().type, deletePost);
}

export default function* postsSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadMainPosts),
    fork(watchDeletePost),
    fork(watchLoadPost)
  ]);
}
