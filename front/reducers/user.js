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

const TURN_OFF_FOLLOW_LIST = "user/TURN_OFF_FOLLOW_LIST";

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

const LOAD_OTHER_REQUEST = "others/LOAD_OTHER_REQUEST";
const LOAD_OTHER_SUCCESS = "others/LOAD_OTHER_SUCCESS";
const LOAD_OTHER_FAILURE = "others/LOAD_OTHER_FAILURE";

// ActionCreator

export const logInRequest = data => ({
  type: LOG_IN_REQUEST,
  payload: data
});

export const logInSuccess = data => ({
  type: LOG_IN_SUCCESS,
  payload: data
});
export const logInFailue = e => ({ type: LOG_IN_FAILURE, payload: e });

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

export const loadFollowRequest = nickname => ({
  type: LOAD_FOLLOW_REQUEST,
  payload: nickname
});
export const loadFollowSuccess = data => ({
  type: LOAD_FOLLOW_SUCCESS,
  payload: data
});
export const loadFollowFailure = e => ({
  type: LOAD_FOLLOW_FAILURE,
  payload: e
});

export const turnOffFollowList = () => ({ type: TURN_OFF_FOLLOW_LIST });

export const followUserRequest = nickname => ({
  type: FOLLOW_USER_REQUEST,
  payload: nickname
});
export const followUserSuccess = data => ({
  type: FOLLOW_USER_SUCCESS,
  payload: { followerId: data.followerId, followingId: data.followingId }
});
export const followUserFailure = e => ({
  type: FOLLOW_USER_FAILURE,
  payload: e
});

export const unfollowUserRequest = nickname => ({
  type: UNFOLLOW_USER_REQUEST,
  payload: nickname
});
export const unfollowUserSuccess = data => ({
  type: UNFOLLOW_USER_SUCCESS,
  payload: { unfollowerId: data.followerId, unfollowingId: data.followingId }
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

export const loadOtherRequest = nickname => ({
  type: LOAD_OTHER_REQUEST,
  payload: nickname
});
export const loadOtherSuccess = other => ({
  type: LOAD_OTHER_SUCCESS,
  payload: other
});
export const loadOtherFailure = e => ({
  type: LOAD_OTHER_FAILURE,
  payload: e
});

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
  isSettingOn: false, // 에디터 활성화
  isLoading: false,
  isFollowListOn: false,
  isBackgroundImageUploading: false,
  isProfileImageUploading: false
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
        draft.errorMessage = action.payload;
        draft.isLoggingOut = false;
        break;
      }

      case LOAD_USER_REQUEST: {
        draft.isLoggingIn = true;
        draft.errorMessage = "";
        break;
      }
      case LOAD_USER_SUCCESS: {
        draft.isLoggedin = true;
        draft.isLoggingIn = false;
        draft.myInformation = action.payload;
        draft.errorMessage = "";
        break;
      }

      case LOAD_USER_FAILURE: {
        draft.errorMessage = action.payload;
        draft.isLoggingIn = false;
        draft.myInformation = {};
        break;
      }

      case FOLLOW_USER_REQUEST: {
        draft.errorMessage = "";
        break;
      }

      case FOLLOW_USER_SUCCESS: {
        draft.myInformation.Followings.unshift({
          id: action.payload.followingId
        });
        draft.peopleInformation.Followers.unshift({
          id: action.payload.followerId
        });
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
        const followingIndex = draft.myInformation.Followings.findIndex(
          v => v.id === action.payload.unfollowerId
        );
        draft.myInformation.Followings.splice(followingIndex, 1);
        draft.errorMessage = "";
        const followerIndex = draft.peopleInformation.Followers.findIndex(
          v => v.id === action.payload.unfollowingId
        );
        draft.peopleInformation.Followers.splice(followerIndex, 1);
        break;
      }

      case UNFOLLOW_USER_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }

      case LOAD_FOLLOW_REQUEST: {
        draft.isFollowListOn = true;
        draft.isLoading = true;
        break;
      }

      case LOAD_FOLLOW_SUCCESS: {
        draft.isLoading = false;
        draft.followingList = action.payload.Followings;
        draft.followerList = action.payload.Followers;

        break;
      }

      case LOAD_FOLLOW_FAILURE: {
        draft.isLoading = false;
        draft.errorMessage = action.payload;
        break;
      }

      case TURN_OFF_FOLLOW_LIST: {
        draft.isFollowListOn = false;
        draft.followingList = [];
        draft.followerList = [];
        break;
      }

      case UPLOAD_BACKGROUND_IMAGE_REQUEST: {
        draft.isBackgroundImageUploading = true;
        break;
      }

      case UPLOAD_BACKGROUND_IMAGE_SUCCESS: {
        draft.isBackgroundImageUploading = false;
        draft.myInformation.backgroundImage = action.payload;
        break;
      }

      case UPLOAD_BACKGROUND_IMAGE_FAILURE: {
        draft.isBackgroundImageUploading = false;
        draft.errorMessage = action.payload;
        break;
      }

      case DELETE_BACKGROUND_IMAGE_REQUEST: {
        draft.myInformation.backgroundImage = null;
        break;
      }

      case UPLOAD_PROFILE_IMAGE_REQUEST: {
        draft.isProfileImageUploading = true;
        break;
      }

      case UPLOAD_PROFILE_IMAGE_SUCCESS: {
        draft.isProfileImageUploading = false;
        draft.myInformation.profileImage = action.payload;
        break;
      }

      case UPLOAD_PROFILE_IMAGE_FAILURE: {
        draft.isProfileImageUploading = false;
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
        draft.myInformation.backgroundImage =
          state.myInformation.Avatar &&
          state.myInformation.Avatar.background_src
            ? state.myInformation.Avatar.background_src
            : null;
        draft.myInformation.profileImage =
          state.myInformation.Avatar && state.myInformation.Avatar.profile_src
            ? state.myInformation.Avatar.profile_src
            : null;
        break;
      }

      case OFF_SETTING: {
        draft.isSettingOn = false;
        break;
      }

      case LOAD_OTHER_REQUEST: {
        break;
      }
      case LOAD_OTHER_SUCCESS: {
        draft.peopleInformation = action.payload;
        break;
      }
      case LOAD_OTHER_FAILURE: {
        draft.errorMessage = action.payload;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default user;
