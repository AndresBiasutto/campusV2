const { deleteChapter } = require("../../controllers/course/_index");

const deleteChapterHandler = async (req, res) => {
    const { chapterId } = req.params;
    try {
      const response = await deleteChapter(chapterId);
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports= deleteChapterHandler