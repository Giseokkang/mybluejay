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

export const loadHashtagPostsRequest = id => ({
  type: LOAD_HASHTAG_POSTS_REQUEST,
  payload: id
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

export const deleteCommentRequest = id => ({
  type: DELETE_COMMENT_REQUEST,
  payload: id
});
export const deleteCommentSuccess = () => ({ type: DELETE_COMMENT_SUCCESS });
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
  switch (action.type) {
    case LOAD_MAIN_POSTS_REQUEST:
      return { ...state, isLoading: true };
    case LOAD_MAIN_POSTS_SUCCESS:
      return { ...state, mainPosts: action.payload, isLoading: false };
    case LOAD_MAIN_POSTS_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };

    case LOAD_POST_REQUEST:
      return { ...state };
    case LOAD_POST_SUCCESS:
      return { ...state, post: action.payload };
    case LOAD_POST_FAILURE:
      return { ...state, errorMessage: action.payload };

    case LOAD_USER_POSTS_REQUEST:
      return { ...state, isLoading: true };
    case LOAD_USER_POSTS_SUCCESS:
      return { ...state, userPosts: action.payload, isLoading: false };
    case LOAD_USER_POSTS_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };

    case LOAD_USER_COMMENTS_REQUEST:
      return { ...state, isLoading: true, errorMessage: "" };
    case LOAD_USER_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userComments: action.payload,
        userPosts: null,
        errorMessage: ""
      };
    case LOAD_USER_COMMENTS_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case LOAD_USER_LIKED_POSTS_REQUEST:
      return { ...state, isLoading: true, errorMessage: "" };
    case LOAD_USER_LIKED_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userPosts: action.payload,
        errorMessage: ""
      };
    case LOAD_USER_LIKED_POSTS_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case LOAD_HASHTAG_POSTS_REQUEST:
      return { ...state };
    case LOAD_HASHTAG_POSTS_SUCCESS:
      return { ...state, mainPosts: action.payload };
    case LOAD_HASHTAG_POSTS_FAILURE:
      return { ...state, errorMessage: action.payload };

    case UPLOAD_IMAGE_REQUEST:
      return { ...state };
    case UPLOAD_IMAGE_SUCCESS:
      return { ...state, imagePaths: [...state.imagePaths, ...action.payload] };
    case UPLOAD_IMAGE_FAILURE:
      return { ...state, errorMessage: action.payload };

    case DELETE_IMAGE:
      return {
        ...state,
        imagePaths: state.imagePaths.filter((v, i) => i !== action.payload)
      };

    case ADD_POST_REQUEST:
      return { ...state, isUploading: true };
    case ADD_POST_SUCCESS:
      return { ...state, isUploading: false, imagePaths: [] };
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
    case LIKE_POST_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.payload.postId
      );
      const post = state.mainPosts[postIndex];
      const Likers = [{ id: action.payload.userId }, ...post.Likers];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };
      return {
        ...state,
        mainPosts,
        post: { ...state.post, Likers }
      };
    }
    case LIKE_POST_FAILURE:
      return { ...state, errorMessage: action.payload };
    case UNLIKE_POST_REQUEST:
      return { ...state };
    case UNLIKE_POST_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        post => post.id === action.payload.postId
      );
      const post = state.mainPosts[postIndex];
      const Likers = post.Likers.filter(
        liker => liker.id !== action.payload.userId
      );

      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = {
        ...state.mainPosts[postIndex],
        Likers
      };

      return { ...state, mainPosts, post: { ...state.post, Likers } };
    }
    case UNLIKE_POST_FAILURE:
      return { ...state, errorMessage: action.payload };

    case LOAD_COMMENTS_REQUEST:
      return { ...state };
    case LOAD_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case LOAD_COMMENTS_FAILURE:
      return { ...state, errorMessage: action.payload };

    case ADD_COMMENT_REQUEST:
      return { ...state };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case ADD_COMMENT_FAILURE:
      return { ...state, errorMessage: action.payload };

    case DELETE_COMMENT_REQUEST:
      return { ...state };
    case DELETE_COMMENT_SUCCESS:
      return { ...state };
    case DELETE_COMMENT_FAILURE:
      return { ...state, errorMessage: action.payload };

    case EDIT_COMMENT_REQUEST:
      return { ...state };
    case EDIT_COMMENT_SUCCESS:
      return { ...state };
    case EDIT_COMMENT_FAILURE:
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

// Export

export default post;
