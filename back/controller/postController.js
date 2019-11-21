import db from "../models";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"]
        },
        {
          model: db.Image,
          attributes: ["id", "src"]
        },
        {
          model: db.User,
          as: "Likers",
          attributes: ["id"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getPostDetail = async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"]
        },
        {
          model: db.Image,
          attributes: ["id", "src"]
        },
        {
          model: db.User,
          as: "Likers",
          attributes: ["id"]
        }
      ]
    });
    res.json(post);
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
          attributes: ["id", "nickname"]
        },
        {
          model: db.Image,
          attributes: ["id", "src"]
        },
        {
          model: db.User,
          as: "Likers",
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

export const postUploadPost = async (req, res, next) => {
  try {
    const hashtags = req.body.description.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content: req.body.description,
      UserId: req.user.id
    });
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(hashtag =>
          db.Hashtag.findOrCreate({
            where: { name: hashtag.slice(1).toLowerCase() }
          })
        )
      );
      await newPost.addHashtags(result.map(r => r[0]));
    }
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        const images = await Promise.all(
          req.body.image.map(image => db.Image.create({ src: image }))
        );
        await newPost.addImages(images);
      } else {
        const image = await db.Image.create({
          src: req.body.image
        });
        await newPost.addImage(image);
      }
    }

    res.send("success");
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const postUploadImages = (req, res) => {
  res.json(req.files.map(v => v.filename));
};

export const postEditPost = (req, res) => {
  res.send("hihi");
};
export const postDeletePost = async (req, res, next) => {
  try {
    await db.Post.destroy({
      where: { id: req.params.id }
    });
    res.send("success");
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const postLikePost = async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id }
    });
    if (!post) {
      return res.status(404).send("게시물을 찾을 수 없습니다.");
    }
    await post.addLiker(req.user.id);
    res.send({ userId: req.user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
export const postUnLikePost = async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id }
    });
    if (!post) {
      return res.status(404).send("게시물을 찾을 수 없습니다.");
    }
    await post.removeLiker(req.user.id);
    res.send({ userId: req.user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
