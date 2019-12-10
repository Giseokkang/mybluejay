import bcrypt from "bcrypt";
import passport from "passport";
import db from "../models";

export const getUserDetail = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { nickname: decodeURIComponent(req.params.id) },
      include: [
        {
          model: db.Post,
          as: "Posts",
          attributes: ["id"]
        },
        {
          model: db.User,
          as: "Followings",
          attributes: ["id"]
        },
        {
          model: db.User,
          as: "Followers",
          attributes: ["id"]
        },
        {
          model: db.Avatar,
          as: "Avatar",
          attributes: ["background_src", "profile_src"]
        }
      ],
      attributes: ["id", "nickname", "email", "createdAt"]
    });
    res.json(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getUser = (req, res) => {
  if (!req.user) {
    return res.status(401).send("로그인이 필요합니다.");
  }
  const user = { ...req.user.toJSON() };
  delete user.password;
  res.json(user);
};

export const postUserLogIn = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async loginErr => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [
            {
              model: db.Post,
              as: "Posts",
              attributes: ["id"]
            },
            {
              model: db.User,
              as: "Followings",
              attributes: ["id"]
            },
            {
              model: db.User,
              as: "Followers",
              attributes: ["id"]
            },
            {
              model: db.Avatar,
              as: "Avatar",
              attributes: ["background_src", "profile_src"]
            }
          ],
          attributes: ["id", "nickname", "email", "createdAt"]
        });

        return res.json(fullUser);
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
};

export const postUserLogOut = (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("성공");
};

export const postUserSignUp = async (req, res) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (exUser) {
      return res.status(400).send("이미 존재하는 아이디입니다.");
    }
    const exNickname = await db.User.findOne({
      where: {
        nickname: req.body.nickname
      }
    });
    if (exNickname) {
      return res.status(400).send("이미 존재하는 닉네임입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await db.User.create({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword
    });

    return res.json({ email: req.body.email, password: req.body.password });
  } catch (e) {
    console.log(e);
    return res.status(403).send(e);
  }
};

export const postUserWithdraw = (req, res) => {
  res.send("widthdraw");
};

export const postFollow = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { nickname: decodeURIComponent(req.params.id) }
    });
    if (!user) {
      return res.status(404).send("해당 유저를 찾을 수 없습니다.");
    }
    await user.addFollower(req.user.id);
    res.json({ followerId: req.user.id, followingId: user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const postUnfollow = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { nickname: decodeURIComponent(req.params.id) }
    });
    if (!user) {
      return res.status(404).send("해당 유저를 찾을 수 없습니다.");
    }
    await user.removeFollower(req.user.id);
    res.json({ unfollowerId: req.user.id, unfollowingId: user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const postLoadFollow = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { nickname: decodeURIComponent(req.params.id) },
      attributes: ["id"],
      include: [
        {
          model: db.User,
          as: "Followings",
          attributes: ["id", "nickname"],
          include: [
            {
              model: db.Avatar,
              as: "Avatar",
              attributes: ["background_src", "profile_src"]
            }
          ]
        },
        {
          model: db.User,
          as: "Followers",
          attributes: ["id", "nickname"],
          include: [
            {
              model: db.Avatar,
              as: "Avatar",
              attributes: ["background_src", "profile_src"]
            }
          ]
        }
      ]
    });
    if (!user) {
      return res.status(404).send("유저를 찾을 수 없습니다.");
    }
    res.json(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getUserPosts = async (req, res, next) => {
  try {
    const userId = await db.User.findOne({
      where: { nickname: req.params.id }
    });

    if (!userId) {
      res.status(404).send("유저를 찾을 수 없습니다.");
    }
    const posts = await db.Post.findAll({
      where: { UserId: userId.id },
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"],
          include: [
            {
              model: db.Avatar,
              as: "Avatar",
              attributes: ["profile_src"]
            }
          ]
        },
        {
          model: db.Image,
          attributes: ["id", "src"]
        },
        {
          model: db.User,
          as: "Likers",
          attributes: ["id"]
        },
        {
          model: db.Comment,
          attributes: ["id"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });
    if (!posts) {
      res.status(404).send("게시물을 찾을 수 없습니다.");
    }
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getUserCommemnts = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { nickname: decodeURIComponent(req.params.id) }
    });
    if (!user) {
      return res.status(404).send("유저를 찾을 수 없습니다.");
    }
    const comments = await db.Comment.findAll({
      where: { UserId: user.id },
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"],
          include: [
            {
              model: db.Avatar,
              as: "Avatar",
              attributes: ["profile_src"]
            }
          ]
        }
      ],
      attributes: ["id", "content", "createdAt", "updatedAt", "PostId"],
      order: [["createdAt", "DESC"]]
    });
    if (!comments) {
      return res.status(404).send("댓글이 존재하지 않습니다.");
    }
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getUserLikedPosts = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { nickname: decodeURIComponent(req.params.id) }
    });
    if (!user) {
      return res.status(404).send("유저를 찾을 수 없습니다.");
    }
    const likedPosts = await db.User.findOne({
      where: { id: user.id },
      include: [
        {
          model: db.Post,
          as: "Liked",
          order: [["createdAt", "DESC"]],
          include: [
            {
              model: db.User,
              attributes: ["id", "nickname"],
              include: [
                {
                  model: db.Avatar,
                  as: "Avatar",
                  attributes: ["profile_src"]
                }
              ]
            },
            {
              model: db.Image,
              attributes: ["id", "src"]
            },
            {
              model: db.User,
              as: "Likers",
              attributes: ["id"]
            },
            {
              model: db.Comment,
              attributes: ["id"]
            }
          ]
        }
      ]
    });
    if (!likedPosts) {
      return res.status(404).send("게시물이 존재하지 않습니다.");
    }
    res.json(likedPosts.Liked);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
export const uploadBackgroundImage = (req, res, next) => {
  try {
    res.json(req.file.path);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
export const uploadAvatar = (req, res, next) => {
  try {
    res.json(req.file.path);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
export const editUser = async (req, res, next) => {
  try {
    const exUser = await db.User.findOne({
      where: { nickname: req.body.nickname }
    });
    const me = await db.User.findOne({
      where: { id: req.user.id }
    });
    if (exUser && exUser.id !== me.id) {
      return res.status(401).send("이미 존재하는 닉네임입니다.");
    }
    await db.User.update(
      {
        nickname: req.body.nickname
      },
      { where: { id: req.user.id } }
    );

    await db.Avatar.findOne({
      where: { UserId: me.id }
    }).then(function(result) {
      if (result) {
        return result.update({
          background_src: req.body.background ? req.body.background : null,
          profile_src: req.body.profileImage ? req.body.profileImage : null
        });
      }
      return db.Avatar.create({
        background_src: req.body.background,
        profile_src: req.body.profileImage,
        UserId: me.id
      });
    });

    return res.json({
      nickname: req.body.nickname,
      background_src: req.body.background,
      profile_src: req.body.profileImage
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
