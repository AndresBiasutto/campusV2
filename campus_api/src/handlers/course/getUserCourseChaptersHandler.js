const {getUserCourseChapters} = require('../../controllers/course/_index');

const getUerCourseChaptersHandler = async (req, res) => {
    const { chapterId } = req.params;
    try {
      const response = await getUserCourseChapters(chapterId)
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = getUerCourseChaptersHandler;