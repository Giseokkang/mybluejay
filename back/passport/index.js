import passport from "passport";
import db from "../models";
import local from "./local";
import google from "./google";

export default () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
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
        ]
      });
      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
  google();
};
