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
export const signUpFailure = () => ({ type: SIGN_UP_FAILURE });
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

const initialState = [];

// Reducer

const members = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return state;
    case SIGN_UP_SUCCESS:
      return state;
    case SIGN_UP_FAILURE:
      return state;
    case WITHDRAW_REQUEST:
      return state;
    case WITHDRAW_SUCCESS:
      return state.filter(member => member.id !== action.payload);
    case WITHDRAW_FAILURE:
      return state;
    default:
      return state;
  }
};

// Export

export default members;
