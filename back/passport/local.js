import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import db from "../models";

export default () => {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      async (email, password, done) => {
        try {
          const user = await db.User.findOne({ where: { email } });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 사용자입니다." });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "패스워드가 틀립니다." });
        } catch (e) {
          console.error(e);
          return done(e);
        }
      }
    )
  );
};
