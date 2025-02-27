const { text } = require("body-parser");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Lection = sequelize.define(
    "Lection",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      lectionOrder: {
        type: DataTypes.INTEGER,
      },
      chapterId: {
        type: DataTypes.UUID,
      },
      text: {
        type: DataTypes.TEXT,
      },
      video: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: true,
    }
  );
  return Lection;
};
