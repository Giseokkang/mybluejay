import db from "../models";

export const getHashtagPosts = async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.Hashtag,
          where: { name: decodeURIComponent(req.params.id) }
        },
        {
          model: db.User,
          attributes: ["id", "nickname"],
          include: [
            {
              model: db.Avatar,
              as: "Avatar",
              attributes: ["background_src", "profile_src"]
            }
          ]
        },
        {
          model: db.User,
          as: "Likers",
          attributes: ["id"]
        },
        {
          model: db.Comment,
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
