import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onPopUp, offPopUp } from "../reducers/popUp";

const usePopUp = () => {
  const { isOnPopUp, id } = useSelector(state => state.popUp);

  const dispatch = useDispatch();
  const turnOnPopUp = useCallback(id => dispatch(onPopUp(id)), [dispatch]);
  const turnOffPopUp = useCallback(() => dispatch(offPopUp()), [dispatch]);

  return {
    isOnPopUp,
    id,
    turnOnPopUp,
    turnOffPopUp
  };
};

export default usePopUp;
