import produce from "immer";
// Action

const SIGN_UP_REQUEST = "members/SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "members/SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "members/SIGN_UP_FAILURE";

const WITHDRAW_REQUEST = "members/WITHDRAW_REQUEST";
const WITHDRAW_SUCCESS = "members/WITHDRAW_SUCCESS";
const WITHDRAW_FAILURE = "members/WITHDRAW_FAILURE";

// Action Creator

export const signUpRequest = data => ({ type: SIGN_UP_REQUEST, payload: data });
export const signUpSuccess = data => ({ type: SIGN_UP_SUCCESS, payload: data });
export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});
export const withdrawRequest = data => ({
  type: WITHDRAW_REQUEST,
  payload: data
});
export const withdrawSuccess = id => ({
  type: WITHDRAW_SUCCESS,
  payload: id
});
export const withdrawFailure = () => ({ type: WITHDRAW_FAILURE });

// InitialState

const initialState = {
  signUpErrorMessage: ""
};

// Reducer

const members = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_UP_REQUEST: {
        draft.signUpErrorMessage = "";
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.signUpErrorMessage = "";

        break;
      }
      case SIGN_UP_FAILURE: {
        draft.signUpErrorMessage = action.payload;
        break;
      }
      case WITHDRAW_REQUEST: {
        break;
      }
      case WITHDRAW_SUCCESS: {
        break;
      }
      case WITHDRAW_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

// Export

export default members;
