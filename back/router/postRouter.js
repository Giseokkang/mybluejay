import express from "express";
import routes from "../routes";
import {
  getPostDetail,
  postUploadPost,
  postEditPost,
  postDeletePost,
  getPosts
} from "../controller/postController";

const postRouter = express.Router();

postRouter.get(routes.getPosts, getPosts);
postRouter.get(routes.postDetail(), getPostDetail);

postRouter.post(routes.uploadPost, postUploadPost);
postRouter.post(routes.editPost(), postEditPost);
postRouter.post(routes.deletePost(), postDeletePost);

export default postRouter;
