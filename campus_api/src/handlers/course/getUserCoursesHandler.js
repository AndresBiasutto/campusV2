const {getUserCourses} = require('../../controllers/course/_index');

const getUerCoursesHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await getUserCourses(id)
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = getUerCoursesHandler;