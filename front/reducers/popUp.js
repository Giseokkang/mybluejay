import produce from "immer";
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
  return produce(state, draft => {
    switch (action.type) {
      case ON_POP_UP: {
        draft.isOnPopUp = true;
        draft.id = action.payload;
        break;
      }
      case OFF_POP_UP: {
        draft.isOnPopUp = false;
        draft.id = null;
        break;
      }
      default: {
        break;
      }
    }
  });
};

// Export

export default popUp;
