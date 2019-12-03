import produce from "immer";
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

const UPLOAD_BACKGROUND_IMAGE_REQUEST = "user/UPLOAD_BACKGROUND_IMAGE_REQUEST";
const UPLOAD_BACKGROUND_IMAGE_SUCCESS = "user/UPLOAD_BACKGROUND_IMAGE_SUCCESS";
const UPLOAD_BACKGROUND_IMAGE_FAILURE = "user/UPLOAD_BACKGROUND_IMAGE_FAILURE";

const DELETE_BACKGROUND_IMAGE_REQUEST = "user/DELETE_BACKGROUND_IMAGE_REQUEST";

const UPLOAD_PROFILE_IMAGE_REQUEST = "user/UPLOAD_PROFILE_IMAGE_REQUEST";
const UPLOAD_PROFILE_IMAGE_SUCCESS = "user/UPLOAD_PROFILE_IMAGE_SUCCESS";
const UPLOAD_PROFILE_IMAGE_FAILURE = "user/UPLOAD_PROFILE_IMAGE_FAILURE";

const DELETE_PROFILE_IMAGE_REQUEST = "user/DELETE_PROFILE_IMAGE_REQUEST";

const EDIT_USER_REQUEST = "user/EDIT_USER_REQUEST";
const EDIT_USER_SUCCESS = "user/EDIT_USER_SUCCESS";
const EDIT_USER_FAILURE = "user/EDIT_USER_FAILURE";

const ADD_POST_TO_ME = "ADD_POST_TO_ME";

const ON_SETTING = "/setting/ON_SETTING";
const OFF_SETTING = "/setting/OFF_SETTING";

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

export const followUserRequest = nickname => ({
  type: FOLLOW_USER_REQUEST,
  payload: nickname
});
export const followUserSuccess = userId => ({
  type: FOLLOW_USER_SUCCESS,
  payload: userId
});
export const followUserFailure = e => ({
  type: FOLLOW_USER_FAILURE,
  payload: e
});

export const unfollowUserRequest = nickname => ({
  type: UNFOLLOW_USER_REQUEST,
  payload: nickname
});
export const unfollowUserSuccess = userId => ({
  type: UNFOLLOW_USER_SUCCESS,
  payload: userId
});
export const unfollowUserFailure = e => ({
  type: UNFOLLOW_USER_FAILURE,
  payload: e
});

export const uploadBackgroundImageRequest = path => ({
  type: UPLOAD_BACKGROUND_IMAGE_REQUEST,
  payload: path
});

export const uploadBackgroundImageSuccess = path => ({
  type: UPLOAD_BACKGROUND_IMAGE_SUCCESS,
  payload: path
});
export const uploadBackgroundImageFailure = e => ({
  type: UPLOAD_BACKGROUND_IMAGE_FAILURE,
  payload: e
});

export const deleteBackgroundImageRequest = () => ({
  type: DELETE_BACKGROUND_IMAGE_REQUEST
});

export const uploadProfileImageRequest = path => ({
  type: UPLOAD_PROFILE_IMAGE_REQUEST,
  payload: path
});

export const uploadProfileImageSuccess = path => ({
  type: UPLOAD_PROFILE_IMAGE_SUCCESS,
  payload: path
});
export const uploadProfileImageFailure = e => ({
  type: UPLOAD_PROFILE_IMAGE_FAILURE,
  payload: e
});

export const deleteProfileImageRequest = () => ({
  type: DELETE_PROFILE_IMAGE_REQUEST
});

export const editUserRequest = formData => ({
  type: EDIT_USER_REQUEST,
  payload: formData
});
export const editUserSuccess = formData => ({
  type: EDIT_USER_SUCCESS,
  payload: formData
});
export const editUserFailure = e => ({
  type: EDIT_USER_FAILURE,
  payload: e
});

export const addPostToMe = post => ({ type: ADD_POST_TO_ME, payload: post });

export const onSetting = () => ({ type: ON_SETTING });
export const offSetting = () => ({ type: OFF_SETTING });

// initialState

const initialState = {
  isLoggedin: false, // 로그인 여부
  isLoggingOut: false, // 로그 아웃 중
  isLoggingIn: false, // 로그인 중
  loginErrorReason: "", // 로그인 실패 에러
  errorMessage: "",
  myInformation: {}, // 내 정보
  followingList: [], // 팔로잉 목록
  followerList: [], // 팔로워 목록
  peopleInformation: null, // 다른 회원 정보,
  isEditting: false,
  isSettingOn: false // 에디터 활성화
};

// reducer

const user = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        draft.isLoggingIn = true;
        draft.loginErrorReason = "";
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.isLoggedin = true;
        draft.isLoggingIn = false;
        draft.myInformation = action.payload;
        draft.loginErrorReason = "";
        break;
      }

      case LOG_IN_FAILURE: {
        draft.loginErrorReason = action.payload;
        draft.isLoggingIn = false;
        draft.myInformation = {};
        break;
      }

      case LOG_OUT_REQUEST: {
        draft.isLoggingOut = true;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.isLoggedin = false;
        draft.myInformation = {};
        draft.isLoggingOut = false;
        break;
      }

      case LOG_OUT_FAILURE: {
        draft.loginErrorReason = action.payload;
        draft.isLoggingOut = false;
        break;
      }

      case LOAD_USER_REQUEST: {
        draft.isLoggingIn = true;
        draft.loginErrorReason = "";
        break;
      }
      case LOAD_USER_SUCCESS: {
        draft.isLoggedin = true;
        draft.isLoggingIn = false;
        draft.myInformation = action.payload;
        draft.loginErrorReason = "";
        break;
      }

      case LOAD_USER_FAILURE: {
        draft.loginErrorReason = action.payload;
        draft.isLoggingIn = false;
        draft.myInformation = {};
        break;
      }

      case FOLLOW_USER_REQUEST: {
        draft.errorMessage = "";
        break;
      }

      case FOLLOW_USER_SUCCESS: {
        draft.myInformation.Followings.unshift({ id: action.payload });
        break;
      }

      case FOLLOW_USER_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }
      case UNFOLLOW_USER_REQUEST: {
        break;
      }
      case UNFOLLOW_USER_SUCCESS: {
        const index = draft.myInformation.Followings.findIndex(
          v => v.id === action.data
        );
        draft.myInformation.Followings.splice(index, 1);
        draft.errorMessage = "";
        break;
      }

      case UNFOLLOW_USER_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case UPLOAD_BACKGROUND_IMAGE_REQUEST: {
        break;
      }

      case UPLOAD_BACKGROUND_IMAGE_SUCCESS: {
        draft.myInformation.backgroundImage = action.payload;
        break;
      }

      case UPLOAD_BACKGROUND_IMAGE_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case DELETE_BACKGROUND_IMAGE_REQUEST: {
        draft.myInformation.backgroundImage = null;
        break;
      }

      case UPLOAD_PROFILE_IMAGE_REQUEST: {
        break;
      }

      case UPLOAD_PROFILE_IMAGE_SUCCESS: {
        draft.myInformation.profileImage = action.payload;
        break;
      }

      case UPLOAD_PROFILE_IMAGE_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case DELETE_PROFILE_IMAGE_REQUEST: {
        draft.profileImage = null;
        break;
      }

      case EDIT_USER_REQUEST: {
        draft.isEditting = true;
        break;
      }

      case EDIT_USER_SUCCESS: {
        draft.isEditting = false;
        draft.isSettingOn = false;
        break;
      }

      case EDIT_USER_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case ON_SETTING: {
        draft.isSettingOn = true;
        draft.myInformation.backgroundImage = state.myInformation.Avatar
          .background_src
          ? state.myInformation.Avatar.background_src
          : null;
        draft.myInformation.profileImage = state.myInformation.Avatar
          .profile_src
          ? state.myInformation.Avatar.profile_src
          : null;
        break;
      }

      case OFF_SETTING: {
        draft.isSettingOn = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default user;
