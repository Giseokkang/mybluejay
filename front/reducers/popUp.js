// Actions

const ON_POP_UP = "popup/ON_POP_UP";
const OFF_POP_UP = "popup/OFF_POP_UP";

// ActionCreator

export const onPopUp = id => ({ type: ON_POP_UP, payload: id });
export const offPopUp = () => ({ type: OFF_POP_UP });

//initialState

const initialState = {
  isOnPopUp: false,
  id: null
};

// Reducer

const popUp = (state = initialState, action) => {
  switch (action.type) {
    case ON_POP_UP:
      return { ...state, isOnPopUp: true, id: action.payload };
    case OFF_POP_UP:
      return { ...state, isOnPopUp: false, id: null };
    default:
      return state;
  }
};

// Export

export default popUp;
