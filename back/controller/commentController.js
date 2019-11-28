import db from "../models";

export const getComments = async (req, res, next) => {
  try {
    const post = await db.Post.findAll({
      where: { id: req.params.id }
    });
    if (!post) {
      return res.status(404).send("게시글을 찾을 수 없습니다.");
    }
    const comments = await db.Comment.findAll({
      where: { PostId: req.params.id },
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"],
          include: [
            {
              model: db.Avatar,
              as: "Avatar",
              attributes: ["profile_src"]
            }
          ]
        }
      ],
      order: [["createdAt", "ASC"]]
    });
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

// export const getPostDetail = async (req, res, next) => {
//   try {
//     const post = await db.Post.findOne({
//       where: { id: req.params.id },
//       include: [
//         {
//           model: db.User,
//           attributes: ["id", "nickname"]
//         }
//       ]
//     });
//     console.log(post);
//     res.json(post);
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };

export const postUploadComment = async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.body.postId }
    });
    if (!post) {
      return res.status(404).send("해당 글이 존재하지 않습니다.");
    }
    const newComment = await db.Comment.create({
      content: req.body.comment,
      UserId: req.user.id,
      PostId: post.id
    });
    await post.addComment(newComment.id);
    const comment = await db.Comment.findOne({
      where: { id: newComment.id },
      include: [
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
        }
      ]
    });

    return res.json(comment);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
export const postEditComment = (req, res) => {
  res.send("hihi");
};

export const postDeleteComment = async (req, res, next) => {
  try {
    await db.Comment.destroy({
      where: { id: req.params.id }
    });
    res.send("success");
  } catch (e) {
    console.error(e);
    next(e);
  }
};
