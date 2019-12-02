import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  logInRequest,
  logOut,
  logOutRequest,
  loadUserRequest,
  followUserRequest,
  unfollowUserRequest,
  uploadBackgroundImageRequest,
  uploadProfileImageRequest,
  editUserRequest,
  deleteBackgroundImageRequest,
  deleteProfileImageRequest,
  onSetting,
  offSetting
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

  const onFollowUserRequest = useCallback(
    nickname => dispatch(followUserRequest(nickname)),
    [dispatch]
  );

  const onUnfollowUserRequest = useCallback(
    nickname => dispatch(unfollowUserRequest(nickname)),
    [dispatch]
  );

  const onUploadBackgroundImageRequest = useCallback(
    path => dispatch(uploadBackgroundImageRequest(path)),
    [dispatch]
  );

  const onDeleteBackgroundImageRequest = useCallback(
    () => dispatch(deleteBackgroundImageRequest()),
    [dispatch]
  );
  const onUploadProfileImageRequest = useCallback(
    path => dispatch(uploadProfileImageRequest(path)),
    [dispatch]
  );

  const onDeleteProfileImageRequest = useCallback(
    () => dispatch(deleteProfileImageRequest()),
    [dispatch]
  );
  const onEditUserRequest = useCallback(
    data => dispatch(editUserRequest(data)),
    [dispatch]
  );

  const turnOnSetting = useCallback(() => dispatch(onSetting()), [dispatch]);
  const turnOffSetting = useCallback(() => dispatch(offSetting()), [dispatch]);

  return {
    user,
    onLogInRequest,
    onLogOutRequest,
    onLoadUserRequest,
    onFollowUserRequest,
    onUnfollowUserRequest,
    onUploadBackgroundImageRequest,
    onUploadProfileImageRequest,
    onEditUserRequest,
    onDeleteBackgroundImageRequest,
    onDeleteProfileImageRequest,
    turnOnSetting,
    turnOffSetting
  };
};

export default useUser;
