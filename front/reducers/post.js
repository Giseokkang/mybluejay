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

const CANCEL_LIKE_REQUEST = "post/ADD_POST_REQUEST";
const CANCEL_LIKE_SUCCESS = "post/ADD_POST_SUCCESS";
const CANCEL_LIKE_FAILURE = "post/ADD_POST_FAILURE";

const ADD_COMMENT_REQUEST = "post/ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "post/ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "post/ADD_COMMENT_FAILURE";

const DELETE_COMMENT_REQUEST = "post/DELETE_COMMENT_REQUEST";
const DELETE_COMMENT_SUCCESS = "post/DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAILURE = "post/DELETE_COMMENT_FAILURE";

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

export const loadMainPostsRequest = () => ({ type: LOAD_MAIN_POSTS_REQUEST });
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
export const loadUserPostsSuccess = content => ({
  type: LOAD_USER_POSTS_SUCCESS,
  payload: content
});
export const loadUserPostsFailure = e => ({
  type: LOAD_USER_POSTS_FAILURE,
  payload: e
});

export const loadHashtagPostsRequest = () => ({
  type: LOAD_HASHTAG_POSTS_REQUEST
});
export const loadHashtagPostsSuccess = () => ({
  type: LOAD_HASHTAG_POSTS_SUCCESS
});
export const loadHashtagPostsFailure = () => ({
  type: LOAD_HASHTAG_POSTS_FAILURE
});

export const uploadImageRequest = () => ({ type: UPLOAD_IMAGE_REQUEST });
export const uploadImageSuccess = () => ({ type: UPLOAD_IMAGE_SUCCESS });
export const uploadImageFailure = () => ({ type: UPLOAD_IMAGE_FAILURE });

export const deleteImage = () => ({ type: DELETE_IMAGE });

export const likePostRequest = () => ({ type: LIKE_POST_REQUEST });
export const likePostSuccess = () => ({ type: LIKE_POST_SUCCESS });
export const likePostFailure = () => ({ type: LIKE_POST_FAILURE });

export const cancelLikeRequest = () => ({ type: CANCEL_LIKE_REQUEST });
export const cancelLikeSuccess = () => ({ type: CANCEL_LIKE_SUCCESS });
export const cancelLikeFailure = () => ({ type: CANCEL_LIKE_FAILURE });

export const addCommentRequest = () => ({ type: ADD_COMMENT_REQUEST });
export const addCommentSuccess = () => ({ type: ADD_COMMENT_SUCCESS });
export const addCommentFailure = () => ({ type: ADD_COMMENT_FAILURE });

export const deleteCommentRequest = () => ({ type: DELETE_COMMENT_REQUEST });
export const deleteCommentSuccess = () => ({ type: DELETE_COMMENT_SUCCESS });
export const deleteCommentFailure = () => ({ type: DELETE_COMMENT_FAILURE });

// InitialState

const initialState = {
  isUploading: false
};

const shape = {
  creator: {
    name: "",
    id: ""
  },
  content: {
    id: "",
    imagePath: "",
    description: "",
    createAt: "",
    like: 0
  }
};

// Reducer

const post = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MAIN_POSTS_REQUEST:
      return { ...state };
    case LOAD_MAIN_POSTS_SUCCESS:
      return { ...state, mainPosts: action.payload };
    case LOAD_MAIN_POSTS_FAILURE:
      return { ...state, errorMessage: action.payload };

    case LOAD_POST_REQUEST:
      return { ...state };
    case LOAD_POST_SUCCESS:
      return { ...state, post: action.payload };
    case LOAD_POST_FAILURE:
      return { ...state, errorMessage: action.payload };

    case LOAD_USER_POSTS_REQUEST:
      return { ...state };
    case LOAD_USER_POSTS_SUCCESS:
      return { ...state };
    case LOAD_USER_POSTS_FAILURE:
      return { ...state, errorMessage: action.payload };

    case LOAD_HASHTAG_POSTS_REQUEST:
      return { ...state };
    case LOAD_HASHTAG_POSTS_SUCCESS:
      return { ...state };
    case LOAD_HASHTAG_POSTS_FAILURE:
      return { ...state, errorMessage: action.payload };

    case UPLOAD_IMAGE_REQUEST:
      return { ...state };
    case UPLOAD_IMAGE_SUCCESS:
      return { ...state };
    case UPLOAD_IMAGE_FAILURE:
      return { ...state, errorMessage: action.payload };

    case DELETE_IMAGE:
      return { ...state };

    case ADD_POST_REQUEST:
      return { ...state, isUploading: true };
    case ADD_POST_SUCCESS:
      return { ...state, isUploading: false };
    case ADD_POST_FAILURE:
      return { ...state, errorMessage: action.payload };

    case DELETE_POST_REQUEST:
      return { ...state };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        mainPosts: state.mainPosts.filter(post => post.id != action.payload)
      };
    case DELETE_POST_FAILURE:
      return { ...state, errorMessage: action.payload };

    case UPDATE_POST_REQUEST:
      return { ...state };
    case UPDATE_POST_SUCCESS:
      return { ...state };
    case UPDATE_POST_FAILURE:
      return { ...state, errorMessage: action.payload };

    case LIKE_POST_REQUEST:
      return { ...state };
    case LIKE_POST_SUCCESS:
      return { ...state };
    case LIKE_POST_FAILURE:
      return { ...state, errorMessage: action.payload };

    case CANCEL_LIKE_REQUEST:
      return { ...state };
    case CANCEL_LIKE_SUCCESS:
      return { ...state };
    case CANCEL_LIKE_FAILURE:
      return { ...state, errorMessage: action.payload };

    case ADD_COMMENT_REQUEST:
      return { ...state };
    case ADD_COMMENT_SUCCESS:
      return { ...state };
    case ADD_COMMENT_FAILURE:
      return { ...state, errorMessage: action.payload };

    case DELETE_COMMENT_REQUEST:
      return { ...state };
    case DELETE_COMMENT_SUCCESS:
      return { ...state };
    case DELETE_COMMENT_FAILURE:
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

// Export

export default post;
