import express from "express";
import routes from "../routes";
import { getHashtagPosts } from "../controller/hashtagController";

const hashtagRouter = express.Router();

hashtagRouter.get(routes.hashtagPosts(), getHashtagPosts);

export default hashtagRouter;
