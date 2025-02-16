const { Course } = require("../../db");

const deleteCourse = async (id) => {
  const course = await Course.findByPk(id);
  const courseName = course.name;
  await Course.destroy({ where: { id: id } });

  return { data: ` ${courseName} fue eliminado correctamente` };
};

module.exports = deleteCourse;
