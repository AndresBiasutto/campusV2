const { Course, User, Theme, Chapter, Lection } = require("../../db");

const getCourseById = async (id) => {
  const Courses = Course.findByPk(id, {
    include: [
      {
        model: User,
        as: "creator",
        attributes: ["id", "name"],
      },
      {
        model: Theme,
        as: "Theme",
        attributes: ["id", "name"],
      },
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
        ],
        order: [["chapterOrder", "ASC"]],
      },
    ],
  });

  console.log(Courses);

  return Courses;
};

module.exports = getCourseById;
