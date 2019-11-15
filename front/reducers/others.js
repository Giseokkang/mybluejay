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
  switch (action.type) {
    case LOAD_OTHER_REQUEST:
      return state;
    case LOAD_OTHER_SUCCESS:
      return { ...state, information: action.payload };
    case LOAD_OTHER_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

// export

export default others;
