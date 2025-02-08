const {getAllCourses} = require('../../controllers/course/_index');

const getAllCoursesHandler = async (req, res) => {
    try {
      const response = await getAllCourses()
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = getAllCoursesHandler;