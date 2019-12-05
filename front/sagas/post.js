import {
  take,
  takeEvery,
  takeLatest,
  put,
  fork,
  call,
  delay,
  all,
  throttle
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
  loadPostFailure,
  loadHashtagPostsSuccess,
  loadHashtagPostsFailure,
  loadHashtagPostsRequest,
  addCommentSuccess,
  addCommentFailure,
  addCommentRequest,
  loadCommentsRequest,
  loadCommentsFailure,
  loadCommentsSuccess,
  loadUserPostsSuccess,
  loadUserPostsFailure,
  loadUserPostsRequest,
  uploadImageSuccess,
  uploadImageRequest,
  uploadImageFailure,
  likePostSuccess,
  likePostFailure,
  likePostRequest,
  unlikePostRequest,
  unlikePostFailure,
  unlikePostSuccess,
  loadUserCommentsSuccess,
  loadUserCommentsFailure,
  loadUserCommentsRequest,
  loadUserLikedPostsSuccess,
  loadUserLikedPostsFailure,
  loadUserLikedPostsRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
  deleteCommentRequest
} from "../reducers/post";
import axios from "axios";

function addPostAPI(addPostData) {
  // API 전송
  return axios.post("/api/post/upload", addPostData, { withCredentials: true });
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.payload);
    yield put(addPostSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(addPostFailure(e));
  }
}

function* watchAddPost() {
  yield takeLatest(addPostRequest().type, addPost);
}

function uploadImageAPI(imagesData) {
  // API 전송
  return axios.post("/api/post/images/upload", imagesData, {
    withCredentials: true
  });
}

function* uploadImage(action) {
  try {
    const result = yield call(uploadImageAPI, action.payload);
    yield put(uploadImageSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(uploadImageFailure(e));
  }
}

function* watchUploadImage() {
  yield takeLatest(uploadImageRequest().type, uploadImage);
}

function loadMainPostsAPI(lastId = 0, limit = 10) {
  // API 전송
  return axios.get(`/api/post/posts?lastId=${lastId}&limit=${limit}`);
}

function* loadMainPosts(action) {
  try {
    const result = yield call(loadMainPostsAPI, action.payload);
    yield put(loadMainPostsSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadMainPostsFailure(e));
  }
}

function* watchLoadMainPosts() {
  yield throttle(2000, loadMainPostsRequest().type, loadMainPosts);
}

function loadPostAPI(id) {
  // API 전송
  return axios.get(
    `/api/post/${id}`,
    {},
    {
      withCredentials: true
    }
  );
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

function loadUserPostsAPI(id) {
  // API 전송
  return axios.get(
    `/api/user/${id}/posts`,
    {},
    {
      withCredentials: true
    }
  );
}

function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.payload);
    yield put(loadUserPostsSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadUserPostsFailure(e));
  }
}

function* watchloadUserPosts() {
  yield takeLatest(loadUserPostsRequest().type, loadUserPosts);
}

function loadUserCommentsAPI(nickname) {
  // API 전송
  return axios.get(
    `/api/user/${nickname}/comments`,
    {},
    {
      withCredentials: true
    }
  );
}

function* loadUserComments(action) {
  try {
    const result = yield call(loadUserCommentsAPI, action.payload);
    yield put(loadUserCommentsSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadUserCommentsFailure(e));
  }
}

function* watchLoadUserComments() {
  yield takeLatest(loadUserCommentsRequest().type, loadUserComments);
}

function loadUserLikedPostsAPI(nickname) {
  // API 전송
  return axios.get(
    `/api/user/${nickname}/liked`,
    {},
    {
      withCredentials: true
    }
  );
}

function* loadUserLikedPosts(action) {
  try {
    const result = yield call(loadUserLikedPostsAPI, action.payload);
    yield put(loadUserLikedPostsSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadUserLikedPostsFailure(e));
  }
}

function* watchLoadUserLikedPosts() {
  yield takeLatest(loadUserLikedPostsRequest().type, loadUserLikedPosts);
}

function loadHashtagPostsAPI({ tag, lastId = 0 }, limit = 10) {
  // API 전송
  return axios.get(`/api/hashtag/${tag}?lastId=${lastId}&limit=${limit}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.payload);
    yield put(loadHashtagPostsSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadHashtagPostsFailure(e));
  }
}

function* watchLoadHashtagPosts() {
  yield takeLatest(loadHashtagPostsRequest().type, loadHashtagPosts);
}

function deletePostAPI(id) {
  // API 전송
  return axios.post(
    `/api/post/${id}/delete`,
    {},
    {
      withCredentials: true
    }
  );
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

function loadCommentsAPI(postId) {
  // API 전송
  return axios.get(`/api/comment/${postId}`);
}

function* loadComments(action) {
  try {
    const result = yield call(loadCommentsAPI, action.payload);
    yield put(loadCommentsSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(loadCommentsFailure(e));
  }
}

function* watchloadComments() {
  yield takeLatest(loadCommentsRequest().type, loadComments);
}

function addCommentAPI(commentData) {
  // API 전송
  return axios.post(`/api/comment/upload`, commentData, {
    withCredentials: true
  });
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.payload);
    yield put(addCommentSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(addCommentFailure(e));
  }
}

function* watchaddComment() {
  yield takeLatest(addCommentRequest().type, addComment);
}

function deleteCommentAPI(commentId) {
  // API 전송
  return axios.post(
    `/api/comment/${commentId}/delete`,
    {},
    {
      withCredentials: true
    }
  );
}

function* deleteComment(action) {
  try {
    yield call(deleteCommentAPI, action.payload);
    yield put(deleteCommentSuccess(action.payload));
  } catch (e) {
    console.log(e);
    yield put(deleteCommentFailure(e));
  }
}

function* watchDeleteComment() {
  yield takeLatest(deleteCommentRequest().type, deleteComment);
}

function likePostAPI(postId) {
  // API 전송
  return axios.post(
    `/api/post/${postId}/like`,
    {},
    {
      withCredentials: true
    }
  );
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.payload);
    yield put(
      likePostSuccess({ postId: action.payload, userId: result.data.userId })
    );
  } catch (e) {
    console.log(e);
    yield put(likePostFailure(e));
  }
}

function* watchLikePost() {
  yield takeLatest(likePostRequest().type, likePost);
}

function unlikePostAPI(postId) {
  // API 전송
  return axios.post(
    `/api/post/${postId}/unlike`,
    {},
    {
      withCredentials: true
    }
  );
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.payload);
    yield put(
      unlikePostSuccess({ postId: action.payload, userId: result.data.userId })
    );
  } catch (e) {
    console.log(e);
    yield put(unlikePostFailure(e));
  }
}

function* watchUnlikePost() {
  yield takeLatest(unlikePostRequest().type, unlikePost);
}

export default function* postsSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadMainPosts),
    fork(watchDeletePost),
    fork(watchLoadPost),
    fork(watchLoadHashtagPosts),
    fork(watchloadComments),
    fork(watchaddComment),
    fork(watchloadUserPosts),
    fork(watchUploadImage),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchLoadUserComments),
    fork(watchLoadUserLikedPosts),
    fork(watchDeleteComment)
  ]);
}
