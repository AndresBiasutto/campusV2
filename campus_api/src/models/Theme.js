const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Theme = sequelize.define(
    "Theme",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
  return Theme;
};
