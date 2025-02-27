const { Course, User, Theme, Chapter, Lection } = require("../../db");

const getUserCourses = async (id) => {
    const user = await User.findByPk(id, {
        include: [
            {
                model: Course,
                as: "createdCourses",
                attributes: ["name", "id", "image", "description"],
                include: [
                    {
                        model: Theme,
                        as: "Theme",
                        attributes: ["name", "id"],
                    },
                    {
                        model: Chapter,
                        as: "chapters",
                        attributes: ["name", "id", "chapterOrder"],
                        include:[
                            {
                                model: Lection,
                                as: "lections",
                                attributes: ["name", "text", "video", "chapterId", "lectionOrder", "id"],
                                order: ["chapterOrder", "ASC"]
                            }
                        ]
                    },
                ],
            },
        ],
    });

    return user ? user.createdCourses : [];
};

module.exports = getUserCourses;
