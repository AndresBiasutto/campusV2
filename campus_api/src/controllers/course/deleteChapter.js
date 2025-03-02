const { Chapter, Lection } = require("../../db");
const deleteChapterLection = require("./deleteChapterLection");
const getUserCourseChapters = require("./getUserCourseChapters");

const deleteChapter = async (chapterId) => {
  const selectedChapter = await getUserCourseChapters(chapterId);
  const chapterName = selectedChapter.name;
  for (const lection of selectedChapter.lections) {
    if (lection) {
      await deleteChapterLection(lection.id);
    }
  }
  await Chapter.destroy({ where: { id: chapterId } });
  return {
    data: `El capitulo "${chapterName}" y todas sus lecciónes fueron eliminadas`,
  };
};

module.exports = deleteChapter;
