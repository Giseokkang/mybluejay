import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import db from "./models";
import passport from "passport";
import passportConfig from "./passport";
import routes from "./routes";
import userRouter from "./router/userRouter";
import postRouter from "./router/postRouter";
import hashtagRouter from "./router/hashtagRouter";

dotenv.config();

const app = express();
db.sequelize.sync();
passportConfig();

app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    // eslint-disable-next-line no-undef
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true
    },
    name: "wmnfidnesaid"
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes.user, userRouter);
app.use(routes.post, postRouter);
app.use(routes.hashtag, hashtagRouter);

export default app;
