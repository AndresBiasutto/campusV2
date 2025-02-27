const { Course, Chapter, User, Lection } = require("../../db");

const getAllCourses = async () => {
  const Courses = Course.findAll({
    include: [
      {
        model: Chapter,
        as: "chapters",
        attributes: ["id", "name", "chapterOrder"],
        include: [
          {
            model: Lection,
            as: "lections",
            attributes: ["id", "name", "lectionOrder"],
          },
        ]
      },
      {
        model: User,
        as: "creator",
        attributes: ["id", "name"],
      },
    ],
  });

  return Courses;
};

module.exports = getAllCourses;
