import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPostRequest,
  deletePostRequest,
  updatePostRequest,
  likePostRequest,
  loadMainPostsRequest,
  loadPostRequest,
  loadHashtagPostsRequest,
  addCommentRequest,
  loadCommentsRequest,
  loadUserPostsRequest,
  uploadImageRequest,
  deleteImage,
  unlikePostRequest,
  loadUserCommentsRequest,
  loadUserLikedPostsRequest
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

  const onLoadUserPosts = useCallback(id =>
    dispatch(loadUserPostsRequest(id), [dispatch])
  );

  const onLoadUserComments = useCallback(nickname =>
    dispatch(loadUserCommentsRequest(nickname), [dispatch])
  );

  const onLoadUserLikedPosts = useCallback(nickname =>
    dispatch(loadUserLikedPostsRequest(nickname), [dispatch])
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

  const onLoadHashtagPosts = useCallback(tag =>
    dispatch(loadHashtagPostsRequest(tag), [dispatch])
  );

  const onLoadComments = useCallback(postId =>
    dispatch(loadCommentsRequest(postId), [dispatch])
  );

  const onAddComment = useCallback((postId, comment) =>
    dispatch(addCommentRequest(postId, comment), [dispatch])
  );

  const onUploadImage = useCallback(images =>
    dispatch(uploadImageRequest(images), [dispatch])
  );

  const onDeleteImage = useCallback(index =>
    dispatch(deleteImage(index), [dispatch])
  );

  const onLikePost = useCallback(postId =>
    dispatch(likePostRequest(postId), [dispatch])
  );

  const onUnlikePost = useCallback(postId =>
    dispatch(unlikePostRequest(postId), [dispatch])
  );

  return {
    post,
    onLoadPosts,
    onLoadPostDetail,
    onLoadUserPosts,
    onLoadUserComments,
    onLoadUserLikedPosts,
    onAddPost,
    onDeletePost,
    onUpdatePost,
    onLikePost,
    onLoadHashtagPosts,
    onLoadComments,
    onAddComment,
    onUploadImage,
    onDeleteImage,
    onLikePost,
    onUnlikePost
  };
};

export default usePost;
