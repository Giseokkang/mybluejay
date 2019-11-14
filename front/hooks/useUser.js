import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  logInRequest,
  logOut,
  logOutRequest,
  loadUserRequest
} from "../reducers/user";

const useUser = () => {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  const onLogInRequest = useCallback(
    information => dispatch(logInRequest(information)),
    [dispatch]
  );
  const onLogOutRequest = useCallback(() => dispatch(logOutRequest()), [
    dispatch
  ]);
  const onLoadUserRequest = useCallback(() => dispatch(loadUserRequest()), [
    dispatch
  ]);

  return {
    user,
    onLogInRequest,
    onLogOutRequest,
    onLoadUserRequest
  };
};

export default useUser;
