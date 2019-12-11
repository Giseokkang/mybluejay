import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import hpp from "hpp";
import db from "./models";
import passport from "passport";
import passportConfig from "./passport";
import routes from "./routes";
import userRouter from "./router/userRouter";
import postRouter from "./router/postRouter";
import hashtagRouter from "./router/hashtagRouter";
import commentRouter from "./router/commentRouter";

dotenv.config();

const app = express();
db.sequelize.sync();
passportConfig();

app.use(helmet());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

app.use(hpp());

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

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

app.get("/", (req, res) => {
  res.send("서버 정상 동작 중");
});

app.use(routes.user, userRouter);
app.use(routes.post, postRouter);
app.use(routes.hashtag, hashtagRouter);
app.use(routes.comment, commentRouter);

export default app;
