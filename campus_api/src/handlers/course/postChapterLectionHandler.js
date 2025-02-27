const {postChapterLection} = require("../../controllers/course/_index");

const postChapterLectiontHandler = async (req, res) => {
  try {
    const response = await postChapterLection(req.body);
    return res.status(201).json(response);
  } catch (error) {
    console.error("Error en postChapterLectiontHandler:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postChapterLectiontHandler;
