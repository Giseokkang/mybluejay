import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUpRequest, withdrawRequest } from "../reducers/members";

const useMembers = () => {
  const members = useSelector(state => state.members);

  const dispatch = useDispatch();
  const onSignUpRequest = useCallback(data => dispatch(signUpRequest(data)), [
    dispatch
  ]);
  const onWithdrawRequest = useCallback(id => dispatch(withdrawRequest(id)), [
    dispatch
  ]);

  return {
    members,
    onSignUpRequest,
    onWithdrawRequest
  };
};

export default useMembers;
