import express from "express";
import routes from "../routes";
import {
  getUserDetail,
  postUserLogIn,
  postUserLogOut,
  postUserSignUp,
  postUserWithdraw,
  getUser
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), getUserDetail);
userRouter.get("/", getUser);

userRouter.post(routes.userLogIn, postUserLogIn);
userRouter.post(routes.userLogOut, postUserLogOut);
userRouter.post(routes.userSignUp, postUserSignUp);
userRouter.post(routes.userWithdraw, postUserWithdraw);

export default userRouter;
