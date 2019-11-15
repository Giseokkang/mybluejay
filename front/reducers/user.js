// Action

const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "user/LOG_IN_FAILURE";

const LOG_OUT_REQUEST = "user/LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "user/LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "user/LOG_OUT_FAILURE";

const LOAD_USER_REQUEST = "user/LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "user/LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "user/LOAD_USER_FAILURE";

const LOAD_FOLLOW_REQUEST = "user/LOAD_FOLLOW_REQUEST";
const LOAD_FOLLOW_SUCCESS = "user/LOAD_FOLLOW_SUCCESS";
const LOAD_FOLLOW_FAILURE = "user/LOAD_FOLLOW_FAILURE";

const FOLLOW_USER_REQUEST = "user/FOLLOW_USER_REQUEST";
const FOLLOW_USER_SUCCESS = "user/FOLLOW_USER_SUCCESS";
const FOLLOW_USER_FAILURE = "user/FOLLOW_USER_FAILURE";

const UNFOLLOW_USER_REQUEST = "user/UNFOLLOW_USER_REQUEST";
const UNFOLLOW_USER_SUCCESS = "user/UNFOLLOW_USER_SUCCESS";
const UNFOLLOW_USER_FAILURE = "user/UNFOLLOW_USER_FAILURE";

const ADD_POST_TO_ME = "ADD_POST_TO_ME";

// ActionCreator

export const logInRequest = data => ({
  type: LOG_IN_REQUEST,
  payload: data
});

export const logInSuccess = data => ({
  type: LOG_IN_SUCCESS,
  payload: data
});
export const logInFailue = () => ({ type: LOG_IN_FAILURE });

export const logOutRequest = () => ({ type: LOG_OUT_REQUEST });
export const logOutSuccess = () => ({ type: LOG_OUT_SUCCESS });
export const logOutFailure = error => ({
  type: LOG_OUT_FAILURE,
  payload: error
});

export const loadUserRequest = () => ({ type: LOAD_USER_REQUEST });
export const loadUserSuccess = data => ({
  type: LOAD_USER_SUCCESS,
  payload: data
});
export const loadUserFailure = e => ({ type: LOAD_USER_FAILURE, payload: e });

export const loadFollowRequest = () => ({ type: LOAD_FOLLOW_REQUEST });
export const loadFollowSuccess = () => ({ type: LOAD_FOLLOW_SUCCESS });
export const loadFollowFailure = () => ({ type: LOAD_FOLLOW_FAILURE });

export const followUserRequest = () => ({ type: FOLLOW_USER_REQUEST });
export const followUserSuccess = () => ({ type: FOLLOW_USER_SUCCESS });
export const followUserFailure = () => ({ type: FOLLOW_USER_FAILURE });

export const unFollowUserRequest = () => ({ type: UNFOLLOW_USER_REQUEST });
export const unFollowUserSuccess = () => ({ type: UNFOLLOW_USER_SUCCESS });
export const unFollowUserFailure = () => ({ type: UNFOLLOW_USER_FAILURE });

export const addPostToMe = post => ({ type: ADD_POST_TO_ME, payload: post });

// initialState

const initialState = {
  isLoggedin: false, // 로그인 여부
  isLoggingOut: false, // 로그 아웃 중
  isLoggingIn: false, // 로그인 중
  loginErrorReason: "", // 로그인 실패 에러
  myInformation: {}, // 내 정보
  followingList: [], // 팔로잉 목록
  followerList: [], // 팔로워 목록
  peopleInformation: null // 다른 회원 정보
};

// reducer

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, isLoggingIn: true, loginErrorReason: "" };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        isLoggingIn: false,
        myInformation: { ...action.payload },
        loginErrorReason: ""
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loginErrorReason: action.payload,
        isLoggingIn: false,
        myInformation: {}
      };

    case LOG_OUT_REQUEST:
      return { ...state, isLoggingOut: true };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggedin: false,
        myInformation: {},
        isLoggingOut: false
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        loginErrorReason: action.payload,
        isLoggingOut: false
      };
    case LOAD_USER_REQUEST:
      return { ...state, isLoggingIn: true, loginErrorReason: "" };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        isLoggingIn: false,
        myInformation: { ...action.payload },
        loginErrorReason: ""
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        loginErrorReason: action.payload,
        isLoggingIn: false,
        myInformation: {}
      };
    default:
      return state;
  }
};

export default user;
