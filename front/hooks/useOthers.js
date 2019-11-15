import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOtherRequest } from "../reducers/others";

const useOthers = () => {
  const others = useSelector(state => state.others);

  const dispatch = useDispatch();

  const onLoadOtherRequest = useCallback(
    nickname => dispatch(loadOtherRequest(nickname)),
    [dispatch]
  );

  return {
    others,
    onLoadOtherRequest
  };
};

export default useOthers;
