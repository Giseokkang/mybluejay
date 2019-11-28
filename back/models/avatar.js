module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define(
    "Avatar",
    {
      background_src: {
        // S3 저장
        type: DataTypes.STRING(200),
        allowNull: true
      },
      profile_src: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
  Avatar.associate = db => {};
  return Avatar;
};
