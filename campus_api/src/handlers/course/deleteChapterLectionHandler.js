const { deleteChapterLection } = require("../../controllers/course/_index");

const deleteChapterLectionHandler = async (req, res) => {
    const { lectionId } = req.params;
    try {
      const response = await deleteChapterLection(lectionId);
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports= deleteChapterLectionHandler