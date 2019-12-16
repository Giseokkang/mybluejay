import express from "express";
import routes from "../routes";
import {
  getUserDetail,
  postUserLogIn,
  postUserLogOut,
  postUserSignUp,
  postUserWithdraw,
  getUser,
  postFollow,
  postUnfollow,
  getUserPosts,
  getUserCommemnts,
  getUserLikedPosts,
  uploadAvatar,
  uploadBackgroundImage,
  editUser,
  postLoadFollow,
  googleLogin,
  googleLoginCallback
} from "../controller/userController";
import {
  onlyPrivate,
  backgroundImageUpload,
  avatarUpload
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post(routes.userLogIn, postUserLogIn);
userRouter.post(routes.userLogOut, postUserLogOut);
userRouter.post(routes.userSignUp, postUserSignUp);
userRouter.post(routes.userWithdraw, postUserWithdraw);

userRouter.get(routes.google, googleLogin);
userRouter.get(routes.googleCallback, googleLoginCallback);

userRouter.post(
  routes.uploadBackgroundImage,
  onlyPrivate,
  backgroundImageUpload.single("background"),
  uploadBackgroundImage
);
userRouter.post(
  routes.uploadAvatar,
  onlyPrivate,
  avatarUpload.single("avatar"),
  uploadAvatar
);

userRouter.post(
  routes.editUser,
  onlyPrivate,
  backgroundImageUpload.fields([]),
  editUser
);

userRouter.get(routes.userDetail(), getUserDetail);

userRouter.post(routes.follow(), onlyPrivate, postFollow);
userRouter.post(routes.unfollow(), onlyPrivate, postUnfollow);
userRouter.post(routes.getUserFollow(), postLoadFollow);

userRouter.get(routes.getUserPosts(), getUserPosts);
userRouter.get(routes.getUserComments(), getUserCommemnts);
userRouter.get(routes.getUserLikedPosts(), getUserLikedPosts);

export default userRouter;
