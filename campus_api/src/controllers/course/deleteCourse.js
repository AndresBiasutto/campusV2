const { Course } = require("../../db");
const deleteChapter = require("./deleteChapter");
const getCourseById = require("./getCourseById");

const deleteCourse = async (courseId) => {
  const course = await getCourseById(courseId);
  if (!course) {
    return { error: "El curso no existe" };
  }
  const courseName = course.name;
  for (const chapter of course.chapters) {
    if (chapter) {
      await deleteChapter(chapter.id);
    }
  }
  await Course.destroy({ where: { id: courseId } });
  return {
    data: `El curso "${courseName}", junto a todódos sus capítulos y lecciónes fueron eliminados.`,
  };
};

module.exports = deleteCourse;
