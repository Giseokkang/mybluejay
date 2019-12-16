// USER

const USER = "/api/user";
const USER_DETAIL = "/:id";
const USER_LOGIN = "/login";
const USER_LOGOUT = "/logout";
const GET_USER_POSTS = "/:id/posts";
const GET_USER_COMMENTS = "/:id/comments";
const GET_USER_LIKED_POSTS = "/:id/liked";
const FOLLOW = "/:id/follow";
const UNFOLLOW = "/:id/unfollow";
const GET_USER_FOLLOW = "/:id/load/follow";

const UPLOAD_BACKGROUND_IMAGE = "/upload/background";
const UPLOAD_AVATAR = "/upload/avatar";
const EDIT_USER = "/edit";

const SIGN_UP = "/signup";
const WITHDRAW = "/withdraw";

// POST

const POST = "/api/post";
const GET_POSTS = "/posts";
const UPLOAD_POST = "/upload";
const POST_DETAIL = "/:id";
const EDIT_POST = "/:id/edit";
const DELETE_POST = "/:id/delete";
const LIKE_POST = "/:id/like";
const UNLIKE_POST = "/:id/unlike";

const UPLOAD_IMAGES = "/images/upload";

// HASHTAG

const HASHTAG = "/api/hashtag";
const HASHTAG_POSTS = "/:id";

// Comment

const COMMENT = "/api/comment";
const GET_COMMENTS = "/:id";
const UPLOAD_COMMENT = "/upload";
const DELETE_COMMENT = "/:id/delete";
const EDIT_COMMENT = "/:id/edit";

// Images

// Google

const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK = "/auth/github/callback";

// Facebook

const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

const routes = {
  user: USER,
  userDetail: id => {
    if (id) {
      return `/user/${id}`;
    }
    return USER_DETAIL;
  },
  userLogIn: USER_LOGIN,
  userLogOut: USER_LOGOUT,
  follow: id => {
    if (id) {
      return `/user/${id}/follow`;
    }
    return FOLLOW;
  },
  unfollow: id => {
    if (id) {
      return `/user/${id}/unfollow`;
    }
    return UNFOLLOW;
  },
  getUserFollow: id => {
    if (id) {
      return `/user/${id}/load/follow`;
    }
    return GET_USER_FOLLOW;
  },
  getUserPosts: id => {
    if (id) {
      return `/user/${id}/posts`;
    }
    return GET_USER_POSTS;
  },
  getUserComments: id => {
    if (id) {
      return `/user/${id}/comments`;
    }
    return GET_USER_COMMENTS;
  },
  getUserLikedPosts: id => {
    if (id) {
      return `/user/${id}/liked`;
    }
    return GET_USER_LIKED_POSTS;
  },
  uploadBackgroundImage: UPLOAD_BACKGROUND_IMAGE,
  uploadAvatar: UPLOAD_AVATAR,
  editUser: EDIT_USER,

  userSignUp: SIGN_UP,
  userWithdraw: WITHDRAW,

  post: POST,

  getPosts: GET_POSTS,
  uploadPost: UPLOAD_POST,
  uploadImages: UPLOAD_IMAGES,
  postDetail: id => {
    if (id) {
      return `/post/${id}`;
    }
    return POST_DETAIL;
  },
  editPost: id => {
    if (id) {
      return `/post/${id}/edit`;
    }
    return EDIT_POST;
  },
  deletePost: id => {
    if (id) {
      return `/post/${id}/delete`;
    }
    return DELETE_POST;
  },
  likePost: id => {
    if (id) {
      return `/post/${id}/like`;
    }
    return LIKE_POST;
  },
  unLikePost: id => {
    if (id) {
      return `/post/${id}/unlike`;
    }
    return UNLIKE_POST;
  },
  hashtag: HASHTAG,
  hashtagPosts: id => {
    if (id) {
      return `/hashtag/${id}`;
    }
    return HASHTAG_POSTS;
  },
  comment: COMMENT,
  getComments: id => {
    if (id) {
      return `/comment/${id}`;
    }
    return GET_COMMENTS;
  },
  uploadComment: UPLOAD_COMMENT,
  deleteComment: id => {
    if (id) {
      return `/comment/${id}/delete`;
    }
    return DELETE_COMMENT;
  },
  editComment: id => {
    if (id) {
      return `/comment/${id}/edit`;
    }
    return EDIT_COMMENT;
  },
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK
};

export default routes;
