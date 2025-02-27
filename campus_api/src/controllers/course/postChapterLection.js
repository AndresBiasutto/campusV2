const { Chapter, Lection } = require("../../db");

const postChapterLection = async (lectionData) => {
    console.log("Datos recibidos:", lectionData);
    
    try {
        const chapterExists = await Chapter.findByPk(lectionData.chapterId);
        if (!chapterExists) {
            throw new Error("El capítulo especificado no existe.");
        }

        const chapterLectionCount = await Lection.count({ where: { chapterId: lectionData.chapterId } });
        const lectionOrder = chapterLectionCount + 1;

        const newLection = await Lection.create({
            name: lectionData.name,
            lectionOrder,
            chapterId: lectionData.chapterId,
            text: lectionData.text,
            video: lectionData.video,
        });

        // Ahora buscamos la Lection recién creada e incluimos su capítulo
        const ChapterLectionAndDetails = await Lection.findByPk(newLection.id, {
            include: [
                {
                    model: Chapter,
                    as: "chapter", // Asegúrate de que este alias coincide con tu relación en Sequelize
                    attributes: ["id", "name", "chapterOrder"],
                },
            ],
        });

        console.log("Respuesta enviada:", ChapterLectionAndDetails);

        return ChapterLectionAndDetails;
    } catch (error) {
        throw new Error("Error creating Lection: " + error.message);
    }
};

module.exports = postChapterLection;
