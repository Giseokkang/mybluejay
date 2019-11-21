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
  res.json(req.user);
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
  res.send("썽공");
};

export const postUserSignUp = async (req, res) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (exUser) {
      res.status(400);
      res.send("이미 존재하는 아이디입니다.");
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
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword
    });
    return res.json(newUser);
  } catch (e) {
    console.log(e);
    return res.status(403).send(e);
  }
};

export const postUserWithdraw = (req, res) => {
  res.send("widthdraw");
};
