const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const {
  DATABASE_URL, //local
} = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    // ssl:{require:true,
    //      rejectUnauthorized: false,
    // },
  },
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

const {
  User,
  Theme,
  Course,
  File,
  Role,
  Lection,
  Module,
  Video,
  Chapter,
  Exam,
  ScheduleDate,
} = sequelize.models;

User.belongsTo(Role, { foreignKey: "role" });
User.hasMany(Course, { as: "createdCourses", foreignKey: "creatorId" });
Course.belongsTo(User, { as: "creator", foreignKey: "creatorId" });
Course.belongsTo(Theme, { foreignKey: "themeId" });
Course.hasMany(Chapter, { foreignKey: "courseId", as: "chapters" });
Chapter.belongsTo(Course, { foreignKey: "courseId", as: "course" });
Chapter.hasMany(Lection, { foreignKey: "chapterId", as: "lections" });
Lection.belongsTo(Chapter, { foreignKey: "chapterId", as: "chapter" });
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
