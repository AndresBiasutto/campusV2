const {getCourseById} = require('../../controllers/course/_index');

const getCourseByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await getCourseById(id)
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = getCourseByIdHandler;