const { Chapter, Course } = require("../../db");

const postChapter = async (ChapterData) => {
  try {
    const chapterCount = await Chapter.count({ where: { courseId: ChapterData.courseId } });
    const chapterOrder = chapterCount + 1;

    const newChapter = await Chapter.create({
      name: ChapterData.name,
      chapterOrder,
      courseId: ChapterData.courseId,
    });

    const ChapterWithDetails = await Chapter.findByPk(newChapter.id, {
      include: [
        {
          model: Course,
          as: "course",
          attributes: ["id", "name"],
        },
      ],
    });
    return ChapterWithDetails;
  } catch (error) {
    throw new Error(
      "Error creating Chapter: " + error.message
    );
  }
};

module.exports = postChapter;
