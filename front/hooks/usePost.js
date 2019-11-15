import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPostRequest,
  deletePostRequest,
  updatePostRequest,
  likePostRequest,
  loadMainPostsRequest,
  loadPostRequest,
  loadHashtagPostsRequest
} from "../reducers/post";

const usePost = () => {
  const post = useSelector(state => state.post);

  const dispatch = useDispatch();

  const onLoadPosts = useCallback(() =>
    dispatch(loadMainPostsRequest(), [dispatch])
  );

  const onLoadPostDetail = useCallback(id =>
    dispatch(loadPostRequest(id), [dispatch])
  );

  const onAddPost = useCallback(post => dispatch(addPostRequest(post)), [
    dispatch
  ]);
  const onDeletePost = useCallback(id => dispatch(deletePostRequest(id)), [
    dispatch
  ]);

  const onUpdatePost = useCallback(() => dispatch(updatePostRequest()), [
    dispatch
  ]);

  const onLikePost = useCallback(() => dispatch(likePostRequest()), [dispatch]);

  const onLoadHashtagPosts = useCallback(tag =>
    dispatch(loadHashtagPostsRequest(tag), [dispatch])
  );

  return {
    post,
    onLoadPosts,
    onLoadPostDetail,
    onAddPost,
    onDeletePost,
    onUpdatePost,
    onLikePost,
    onLoadHashtagPosts
  };
};

export default usePost;
