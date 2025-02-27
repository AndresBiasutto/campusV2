const postChapter = require("../../controllers/course/postChapter");

const postChaptertHandler = async (req, res) => {
  try {
    const response = await postChapter(req.body);
    return res.status(201).json(response);
  } catch (error) {
    console.error("Error en postChaptertHandler:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postChaptertHandler;
