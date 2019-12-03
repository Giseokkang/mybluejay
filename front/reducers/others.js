import produce from "immer";

// Action

const LOAD_OTHER_REQUEST = "others/LOAD_OTHER_REQUEST";
const LOAD_OTHER_SUCCESS = "others/LOAD_OTHER_SUCCESS";
const LOAD_OTHER_FAILURE = "others/LOAD_OTHER_FAILURE";

// Action Creator

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
  information: null,
  errorMessage: ""
};

// Reducer

const others = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_OTHER_REQUEST: {
        break;
      }
      case LOAD_OTHER_SUCCESS: {
        draft.information = action.payload;
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

// export

export default others;
