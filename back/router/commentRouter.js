import express from "express";
import routes from "../routes";
import {
  postUploadComment,
  postDeleteComment,
  postEditComment,
  getComments
} from "../controller/commentController";
import { onlyPrivate } from "../middlewares";

const commentRouter = express.Router();

commentRouter.get(routes.getComments(), getComments);

commentRouter.post(routes.uploadComment, onlyPrivate, postUploadComment);
commentRouter.post(routes.deleteComment(), onlyPrivate, postDeleteComment);
commentRouter.post(routes.editComment(), onlyPrivate, postEditComment);

export default commentRouter;
