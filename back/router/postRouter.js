import express from "express";
import routes from "../routes";
import {
  getPostDetail,
  postUploadPost,
  postEditPost,
  postDeletePost,
  getPosts,
  getUserPosts,
  postUploadImages,
  postLikePost,
  postUnLikePost
} from "../controller/postController";
import { onlyPrivate, imageUpload } from "../middlewares";

const postRouter = express.Router();

postRouter.get(routes.getPosts, getPosts);
postRouter.get(routes.getUserPosts(), getUserPosts);

postRouter.post(
  routes.uploadPost,
  onlyPrivate,
  imageUpload.none(),
  postUploadPost
);
postRouter.post(
  routes.uploadImages,
  onlyPrivate,
  imageUpload.array("image"),
  postUploadImages
);

postRouter.get(routes.postDetail(), getPostDetail);

postRouter.post(routes.editPost(), onlyPrivate, postEditPost);
postRouter.post(routes.deletePost(), onlyPrivate, postDeletePost);

postRouter.post(routes.likePost(), onlyPrivate, postLikePost);
postRouter.post(routes.unLikePost(), onlyPrivate, postUnLikePost);

export default postRouter;
