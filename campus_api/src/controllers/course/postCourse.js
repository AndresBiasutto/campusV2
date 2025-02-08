const { Course, User, Theme } = require("../../db");

const postCourse = async (CourseData) => {
  try {
    const newCourse = await Course.create({
      name: CourseData.name,
      description: CourseData.description,
      creatorId: CourseData.creatorId,
      themeId: CourseData.themeId,
      image: CourseData.image,
    });

    const CourseWithDetails = await Course.findByPk(newCourse.id, {
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
      ],
    });
    return CourseWithDetails;
  } catch (error) {
    throw new Error(
      "Error creating Course: " + error.message
    );
  }
};

module.exports = postCourse;
