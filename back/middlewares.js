import multer from "multer";
// import multerS3 from "multer-s3";
// import aws from "aws-sdk";
import routes from "./routes";
import path from "path";

// const s3 = new aws.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   region: "ap-northeast-1"
// });

// const multerVideo = multer({
//   storage: multerS3({
//     s3,
//     acl: "public-read",
//     bucket: "wetubestorage/video"
//   })
// });

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext); // 제로초.png, ext===.png, basename===제로초
    cb(null, basename + Date.now() + ext);
  }
});

export const imageUpload = multer({
  storage: storage,
  limits: { fileSize: 20 * 1024 * 1024 }
});

// export const uploadVideo = multerVideo.single("videoFile");
// export const uploadAvatar = multerAvatar.single("avatar");

// export const localMiddleware = (req, res, next) => {
//   res.locals.siteName = "WeTube";
//   res.locals.routes = routes;
//   res.locals.loggedUser = req.user || null;
//   next();
// };

export const onlyPublic = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인한 사용자는 접근할 수 없습니다.");
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};
