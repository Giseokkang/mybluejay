// import passport from "passport";
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// import db from "../models";

// // Use the GoogleStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and Google
// //   profile), and invoke a callback with a user object.
// export default () => {
//   passport.use(
//     new GoogleStrategy(
//       {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: "http://mybluejay.net/auth/google/callback"
//       },
//       async (accessToken, refreshToken, profile, done) => {
//         try {
//           console.log("accessToken", accessToken);
//           console.log("refreshToken", refreshToken);
//           console.log("profile", profile);

//           db.User.findOrCreate({ googleId: profile.id }, function(err, user) {
//             return done(err, user);
//           });
//         } catch (e) {
//           console.error(e);
//           return done(e);
//         }
//       }
//     )
//   );
// };
