import produce from "immer";
// Action

const LOAD_MAIN_POSTS_REQUEST = "post/LOAD_MAIN_POSTS_REQUEST";
const LOAD_MAIN_POSTS_SUCCESS = "post/LOAD_MAIN_POSTS_SUCCESS";
const LOAD_MAIN_POSTS_FAILURE = "post/LOAD_MAIN_POSTS_FAILURE";

const LOAD_POST_REQUEST = "post/LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "post/LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "post/LOAD_POST_FAILURE";

const LOAD_USER_POSTS_REQUEST = "post/LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "post/LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "post/LOAD_USER_POSTS_FAILURE";

const LOAD_USER_COMMENTS_REQUEST = "post/LOAD_USER_COMMENTS_REQUEST";
const LOAD_USER_COMMENTS_SUCCESS = "post/LOAD_USER_COMMENTS_SUCCESS";
const LOAD_USER_COMMENTS_FAILURE = "post/LOAD_USER_COMMENTS_FAILURE";

const LOAD_USER_LIKED_POSTS_REQUEST = "post/LOAD_USER_LIKED_POSTS_REQUEST";
const LOAD_USER_LIKED_POSTS_SUCCESS = "post/LOAD_USER_LIKED_POSTS_SUCCESS";
const LOAD_USER_LIKED_POSTS_FAILURE = "post/LOAD_USER_LIKED_POSTS_FAILURE";

const LOAD_HASHTAG_POSTS_REQUEST = "post/LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "post/LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "post/LOAD_HASHTAG_POSTS_FAILURE";

const UPLOAD_IMAGE_REQUEST = "post/UPLOAD_IMAGE_REQUEST";
const UPLOAD_IMAGE_SUCCESS = "post/UPLOAD_IMAGE_SUCCESS";
const UPLOAD_IMAGE_FAILURE = "post/UPLOAD_IMAGE_FAILURE";

const DELETE_IMAGE = "post/DELETE_IMAGE";

const ADD_POST_REQUEST = "post/ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "post/ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "post/ADD_POST_FAILURE";

const DELETE_POST_REQUEST = "post/DELETE_POST_REQUEST";
const DELETE_POST_SUCCESS = "post/DELETE_POST_SUCCESS";
const DELETE_POST_FAILURE = "post/DELETE_POST_FAILURE";

const UPDATE_POST_REQUEST = "post/UPDATE_POST_REQUEST";
const UPDATE_POST_SUCCESS = "post/UPDATE_POST_SUCCESS";
const UPDATE_POST_FAILURE = "post/UPDATE_POST_FAILURE";

const LIKE_POST_REQUEST = "post/LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "post/LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "post/LIKE_POST_FAILURE";

const UNLIKE_POST_REQUEST = "post/UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "post/UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "post/UNLIKE_POST_FAILURE";

const LOAD_COMMENTS_REQUEST = "post/LOAD_COMMENTS_REQUEST";
const LOAD_COMMENTS_SUCCESS = "post/LOAD_COMMENTS_SUCCESS";
const LOAD_COMMENTS_FAILURE = "post/LOAD_COMMENTS_FAILURE";

const ADD_COMMENT_REQUEST = "post/ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "post/ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "post/ADD_COMMENT_FAILURE";

const DELETE_COMMENT_REQUEST = "post/DELETE_COMMENT_REQUEST";
const DELETE_COMMENT_SUCCESS = "post/DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAILURE = "post/DELETE_COMMENT_FAILURE";

const EDIT_COMMENT_REQUEST = "post/EDIT_COMMENT_REQUEST";
const EDIT_COMMENT_SUCCESS = "post/EDIT_COMMENT_SUCCESS";
const EDIT_COMMENT_FAILURE = "post/EDIT_COMMENT_FAILURE";

// ActionCreator

export const addPostRequest = post => ({
  type: ADD_POST_REQUEST,
  payload: post
});

export const addPostSuccess = post => ({
  type: ADD_POST_SUCCESS,
  payload: post
});

export const addPostFailure = e => ({ type: ADD_POST_FAILURE, payload: e });

export const deletePostRequest = id => ({
  type: DELETE_POST_REQUEST,
  payload: id
});

export const deletePostSuccess = id => ({
  type: DELETE_POST_SUCCESS,
  payload: id
});

export const deletePostFailure = e => ({
  type: DELETE_POST_FAILURE,
  payload: e
});

export const updatePostRequest = () => ({ type: UPDATE_POST_REQUEST });

export const updatePostSuccess = () => ({ type: UPDATE_POST_SUCCESS });

export const updatePostFailure = e => ({
  type: UPDATE_POST_FAILURE,
  payload: e
});

export const loadMainPostsRequest = lastId => ({
  type: LOAD_MAIN_POSTS_REQUEST,
  payload: lastId
});
export const loadMainPostsSuccess = posts => ({
  type: LOAD_MAIN_POSTS_SUCCESS,
  payload: posts
});
export const loadMainPostsFailure = e => ({
  type: LOAD_MAIN_POSTS_FAILURE,
  payload: e
});

export const loadPostRequest = id => ({ type: LOAD_POST_REQUEST, payload: id });
export const loadPostSuccess = post => ({
  type: LOAD_POST_SUCCESS,
  payload: post
});
export const loadPostFailure = e => ({
  type: LOAD_POST_FAILURE,
  payload: e
});

export const loadUserPostsRequest = id => ({
  type: LOAD_USER_POSTS_REQUEST,
  payload: id
});
export const loadUserPostsSuccess = posts => ({
  type: LOAD_USER_POSTS_SUCCESS,
  payload: posts
});
export const loadUserPostsFailure = e => ({
  type: LOAD_USER_POSTS_FAILURE,
  payload: e
});
export const loadUserCommentsRequest = nickname => ({
  type: LOAD_USER_COMMENTS_REQUEST,
  payload: nickname
});
export const loadUserCommentsSuccess = comments => ({
  type: LOAD_USER_COMMENTS_SUCCESS,
  payload: comments
});
export const loadUserCommentsFailure = e => ({
  type: LOAD_USER_COMMENTS_FAILURE,
  payload: e
});
export const loadUserLikedPostsRequest = nickname => ({
  type: LOAD_USER_LIKED_POSTS_REQUEST,
  payload: nickname
});
export const loadUserLikedPostsSuccess = likedPosts => ({
  type: LOAD_USER_LIKED_POSTS_SUCCESS,
  payload: likedPosts
});
export const loadUserLikedPostsFailure = e => ({
  type: LOAD_USER_LIKED_POSTS_FAILURE,
  payload: e
});

export const loadHashtagPostsRequest = (tag, lastId) => ({
  type: LOAD_HASHTAG_POSTS_REQUEST,
  payload: { tag, lastId }
});
export const loadHashtagPostsSuccess = posts => ({
  type: LOAD_HASHTAG_POSTS_SUCCESS,
  payload: posts
});
export const loadHashtagPostsFailure = e => ({
  type: LOAD_HASHTAG_POSTS_FAILURE,
  payload: e
});

export const uploadImageRequest = images => ({
  type: UPLOAD_IMAGE_REQUEST,
  payload: images
});
export const uploadImageSuccess = images => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload: images
});
export const uploadImageFailure = () => ({ type: UPLOAD_IMAGE_FAILURE });

export const deleteImage = index => ({ type: DELETE_IMAGE, payload: index });

export const likePostRequest = postId => ({
  type: LIKE_POST_REQUEST,
  payload: postId
});
export const likePostSuccess = data => ({
  type: LIKE_POST_SUCCESS,
  payload: data
});
export const likePostFailure = e => ({ type: LIKE_POST_FAILURE, payload: e });

export const unlikePostRequest = postId => ({
  type: UNLIKE_POST_REQUEST,
  payload: postId
});
export const unlikePostSuccess = data => ({
  type: UNLIKE_POST_SUCCESS,
  payload: data
});
export const unlikePostFailure = e => ({ type: UNLIKE_POST_FAILURE, e });

export const loadCommentsRequest = postId => ({
  type: LOAD_COMMENTS_REQUEST,
  payload: postId
});
export const loadCommentsSuccess = comments => ({
  type: LOAD_COMMENTS_SUCCESS,
  payload: comments
});
export const loadCommentsFailure = e => ({
  type: LOAD_COMMENTS_FAILURE,
  payload: e
});

export const addCommentRequest = (postId, comment) => ({
  type: ADD_COMMENT_REQUEST,
  payload: { postId, comment }
});
export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment
});
export const addCommentFailure = e => ({
  type: ADD_COMMENT_FAILURE,
  payload: e
});

export const deleteCommentRequest = commentId => ({
  type: DELETE_COMMENT_REQUEST,
  payload: commentId
});
export const deleteCommentSuccess = commentId => ({
  type: DELETE_COMMENT_SUCCESS,
  payload: commentId
});
export const deleteCommentFailure = e => ({
  type: DELETE_COMMENT_FAILURE,
  payload: e
});

export const editCommentRequest = () => ({ type: EDIT_COMMENT_REQUEST });
export const editCommentSuccess = () => ({ type: EDIT_COMMENT_SUCCESS });
export const editCommentFailure = () => ({ type: EDIT_COMMENT_FAILURE });

// InitialState

const initialState = {
  isUploading: false,
  imagePaths: [],
  mainPosts: [],
  isLoading: false
};

// Reducer

const post = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_MAIN_POSTS_REQUEST: {
        draft.isLoading = true;
        draft.hasMorePosts = action.payload ? state.hasMorePosts : true;
        draft.mainPosts = action.payload ? [...state.mainPosts] : [];
        break;
      }
      case LOAD_MAIN_POSTS_SUCCESS: {
        action.payload.forEach(v => draft.mainPosts.push(v));
        draft.isLoading = false;
        draft.hasMorePosts = action.payload.length === 10;
        break;
      }

      case LOAD_MAIN_POSTS_FAILURE: {
        draft.errorMessage = action.payload;
        draft.isLoading = false;
        break;
      }

      case LOAD_POST_REQUEST: {
        break;
      }
      case LOAD_POST_SUCCESS: {
        draft.post = action.payload;
        break;
      }
      case LOAD_POST_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case LOAD_USER_POSTS_REQUEST: {
        draft.userComments = [];
        draft.isLoading = true;
        break;
      }
      case LOAD_USER_POSTS_SUCCESS: {
        draft.userPosts = action.payload;
        draft.isLoading = false;
        break;
      }
      case LOAD_USER_POSTS_FAILURE: {
        draft.errorMessage = action.payload;
        draft.isLoading = false;
        break;
      }

      case LOAD_USER_COMMENTS_REQUEST: {
        draft.userPosts = [];
        draft.isLoading = true;
        draft.errorMessage = "";
        break;
      }
      case LOAD_USER_COMMENTS_SUCCESS: {
        draft.isLoading = false;
        draft.userComments = action.payload;
        draft.userPosts = null;
        draft.errorMessage = "";
        break;
      }

      case LOAD_USER_COMMENTS_FAILURE: {
        draft.isLoading = false;
        draft.errorMessage = action.payload;
        break;
      }

      case LOAD_USER_LIKED_POSTS_REQUEST: {
        draft.userComments = [];
        draft.isLoading = true;
        draft.errorMessage = "";
        break;
      }
      case LOAD_USER_LIKED_POSTS_SUCCESS: {
        draft.isLoading = false;
        draft.userPosts = action.payload;
        draft.errorMessage = "";
        break;
      }

      case LOAD_USER_LIKED_POSTS_FAILURE: {
        draft.isLoading = false;
        draft.errorMessage = action.payload;
        break;
      }

      case LOAD_HASHTAG_POSTS_REQUEST: {
        draft.mainPosts = action.payload.lastId ? draft.mainPosts : [];
        draft.isLoading = true;
        draft.hasMorePosts = action.payload.lastId ? draft.hasMorePosts : true;
        break;
      }

      case LOAD_HASHTAG_POSTS_SUCCESS: {
        action.payload.forEach(v => draft.mainPosts.push(v));
        draft.isLoading = false;
        draft.hasMorePosts = action.payload.length === 10;
        break;
      }

      case LOAD_HASHTAG_POSTS_FAILURE: {
        draft.isLoading = false;
        draft.errorMessage = action.payload;
        break;
      }

      case UPLOAD_IMAGE_REQUEST: {
        break;
      }
      case UPLOAD_IMAGE_SUCCESS: {
        action.payload.forEach(v => draft.imagePaths.push(v));
        break;
      }

      case UPLOAD_IMAGE_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case DELETE_IMAGE: {
        const index = draft.imagePaths.findIndex(
          (v, i) => i === action.payload
        );
        draft.imagePaths.splice(index, 1);
        break;
      }

      case ADD_POST_REQUEST: {
        draft.isUploading = true;
        break;
      }
      case ADD_POST_SUCCESS: {
        draft.isUploading = false;
        draft.imagePaths = [];
        draft.mainPosts.unshift(action.payload);
        break;
      }

      case ADD_POST_FAILURE: {
        draft.isLoading = false;

        draft.errorMessage = action.payload;
        break;
      }

      case DELETE_POST_REQUEST: {
        break;
      }
      case DELETE_POST_SUCCESS: {
        const mainPostindex = draft.mainPosts.findIndex(
          v => v.id === action.payload
        );
        draft.mainPosts.splice(mainPostindex, 1);
        if (draft.userPosts && draft.userPosts.length > 0) {
          const userPostIndex = draft.userPosts.findIndex(
            v => v.id === action.payload
          );
          draft.userPosts.splice(userPostIndex, 1);
        }
        break;
      }

      case DELETE_POST_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case UPDATE_POST_REQUEST: {
        break;
      }
      case UPDATE_POST_SUCCESS: {
        break;
      }
      case UPDATE_POST_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case LIKE_POST_REQUEST: {
        break;
      }
      case LIKE_POST_SUCCESS: {
        if (draft.mainPosts && draft.mainPosts.length > 0) {
          const postIndex = draft.mainPosts.findIndex(
            v => v.id === action.payload.postId
          );
          draft.mainPosts[postIndex].Likers.unshift({
            id: action.payload.userId
          });
        }

        if (draft.post && draft.post.id) {
          draft.post.Likers.unshift({ id: action.payload.userId });
        }
        if (draft.userPosts && draft.userPosts.length > 0) {
          const userPostIndex = draft.userPosts.findIndex(
            v => v.id === action.payload.postId
          );

          draft.userPosts[userPostIndex].Likers.unshift({
            id: action.payload.userId
          });
        }
        break;
      }

      case LIKE_POST_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }
      case UNLIKE_POST_REQUEST: {
        break;
      }
      case UNLIKE_POST_SUCCESS: {
        if (draft.mainPosts && draft.mainPosts.length > 0) {
          const mainPostIndex = draft.mainPosts.findIndex(
            v => v.id === action.payload.postId
          );
          const likerIndex = draft.mainPosts[mainPostIndex].Likers.findIndex(
            v => v.id === action.payload.userId
          );
          draft.mainPosts[mainPostIndex].Likers.splice(likerIndex, 1);
        }

        if (draft.post && draft.post.id) {
          const postIndex = draft.post.Likers.findIndex(
            v => v.id === action.payload.userId
          );
          draft.post.Likers.splice(postIndex, 1);
        }
        if (draft.userPosts && draft.userPosts.length > 0) {
          const userPostIndex = draft.userPosts.findIndex(
            v => v.id === action.payload.postId
          );
          const userPostLikerIndex = draft.userPosts[
            userPostIndex
          ].Likers.findIndex(v => v.id === action.payload.userId);

          draft.userPosts[userPostIndex].Likers.splice(userPostLikerIndex, 1);
        }
        break;
      }

      case UNLIKE_POST_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case LOAD_COMMENTS_REQUEST: {
        break;
      }
      case LOAD_COMMENTS_SUCCESS: {
        draft.comments = action.payload;
        break;
      }
      case LOAD_COMMENTS_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case ADD_COMMENT_REQUEST: {
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        draft.comments.push(action.payload);
        break;
      }

      case ADD_COMMENT_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case DELETE_COMMENT_REQUEST: {
        break;
      }
      case DELETE_COMMENT_SUCCESS: {
        const commentIndex = draft.comments.findIndex(
          v => v.id === action.payload
        );
        draft.comments.splice(commentIndex, 1);
        break;
      }
      case DELETE_COMMENT_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case EDIT_COMMENT_REQUEST: {
        break;
      }
      case EDIT_COMMENT_SUCCESS: {
        break;
      }
      case EDIT_COMMENT_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      default: {
        break;
      }
    }
  });
};

// Export

export default post;
