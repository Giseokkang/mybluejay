import db from "../models";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"]
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
        }
      ]
    });
    console.log(post);
    res.json(post);
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

    res.send("success");
  } catch (e) {
    console.error(e);
    next(e);
  }
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
