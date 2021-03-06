import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-northeast-2"
});

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "uploads/postImages");
//   },
//   filename: function(req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const basename = path.basename(file.originalname, ext); // 제로초.png, ext===.png, basename===제로초
//     cb(null, basename + Date.now() + ext);
//   }
// });

export const imageUpload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    acl: "public-read",
    bucket: "mybluejaystorage/postImages"
  }),
  limits: { fileSize: 20 * 1024 * 1024 }
});

// const backgroundStorage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "uploads/backgrounds");
//   },
//   filename: function(req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const basename = path.basename(file.originalname, ext); // 제로초.png, ext===.png, basename===제로초
//     cb(null, basename + Date.now() + ext);
//   }
// });

export const backgroundImageUpload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    acl: "public-read",
    bucket: "mybluejaystorage/backgrounds"
  }),
  limits: { fileSize: 20 * 1024 * 1024 }
});

// const avatarStorage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "uploads/avatars");
//   },
//   filename: function(req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const basename = path.basename(file.originalname, ext); // 제로초.png, ext===.png, basename===제로초
//     cb(null, basename + Date.now() + ext);
//   }
// });

export const avatarUpload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    acl: "public-read",
    bucket: "mybluejaystorage/avatars"
  }),
  limits: { fileSize: 20 * 1024 * 1024 }
});

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
