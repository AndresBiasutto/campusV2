const { Chapter, Lection } = require("../../db");

const getUserCourseChapters = async (chapterId) => {
    const selectedChapter = await Chapter.findByPk(chapterId, {
        include: [
            {
              model: Lection,
              as: "lections",
              attributes: ["id", "name", "lectionOrder"],
            },
          ],
    });


    return selectedChapter ? selectedChapter : [];
};

module.exports = getUserCourseChapters;
