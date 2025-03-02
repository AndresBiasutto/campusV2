const deleteCourse= require("../../controllers/course/deleteCourse")

const deleteCourseHandler = async (req, res) => {
    const { courseId } = req.params;
    try {
      const response = await deleteCourse(courseId);
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports= deleteCourseHandler