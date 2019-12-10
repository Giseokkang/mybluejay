/* eslint-disable no-undef */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // 테이블명은 users
      nickname: {
        type: DataTypes.STRING(12), // 20글자 이하
        allowNull: false, // 필수
        unique: true // 고유한 값
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true // 고유한 값
      },
      googleId: {
        type: DataTypes.STRING(30),
        allowNull: true,
        unique: true // 고유한 값
      },
      facebookId: {
        type: DataTypes.STRING(30),
        allowNull: true,
        unique: true // 고유한 값
      },
      password: {
        type: DataTypes.STRING(100), // 100글자 이하
        allowNull: false
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci" // 한글이 저장돼요
    }
  );

  User.associate = db => {
    db.User.hasMany(db.Post, { as: "Posts", onDelete: "cascade", hooks: true });
    db.User.hasMany(db.Comment, { onDelete: "cascade", hooks: true });
    db.User.hasOne(db.Avatar, { onDelete: "cascade", hooks: true });

    db.User.belongsToMany(db.Post, {
      through: "Like",
      as: "Liked",
      onDelete: "cascade",
      hooks: true
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "followingId",
      onDelete: "cascade",
      hooks: true
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "followerId",
      onDelete: "cascade",
      hooks: true
    });
  };

  return User;
};
