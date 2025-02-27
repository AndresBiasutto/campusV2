const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Chapter = sequelize.define(
    "Chapter",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      chapterOrder: {
        type: DataTypes.INTEGER,
    },
      courseId: {
        type: DataTypes.UUID,
      },
    },
    {
      timestamps: true,
    }
  );
  return Chapter;
};
