// USER

const USER = "/api/user";
const USER_DETAIL = "/:id";
const USER_LOGIN = "/login";
const USER_LOGOUT = "/logout";
const FOLLOW = "/:id/follow";

const SIGN_UP = "/signup";
const WITHDRAW = "/withdraw";

// POST

const POST = "/api/post";
const GET_POSTS = "/posts";
const UPLOAD_POST = "/upload";
const POST_DETAIL = "/:id";
const EDIT_POST = "/:id/edit";
const DELETE_POST = "/:id/delete";

// HASHTAG

const HASHTAG = "/api/hashtag";
const HASHTAG_POSTS = "/:id";

// Comment

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
  userSignUp: SIGN_UP,
  userWithdraw: WITHDRAW,

  post: POST,
  getPosts: GET_POSTS,
  uploadPost: UPLOAD_POST,
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
  hashtag: HASHTAG,
  hashtagPosts: id => {
    if (id) {
      return `/${id}`;
    }
    return HASHTAG_POSTS;
  }
};

export default routes;
