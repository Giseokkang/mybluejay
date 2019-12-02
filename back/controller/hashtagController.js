import db from "../models";

export const getHashtagPosts = async (req, res, next) => {
  try {
    let where = {};
    if (parseInt(req.query.lastId, 10)) {
      where = {
        id: {
          [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10)
        }
      };
    }
    const posts = await db.Post.findAll({
      where,
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
          model: db.Image,
          attributes: ["id", "src"]
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
      order: [["createdAt", "DESC"]],
      limit: parseInt(req.query.limit)
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
