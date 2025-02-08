const {getThemes} = require('../../controllers/course/_index');

const getThemeHandler = async (req, res) => {
    try {
      const response = await getThemes()
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = getThemeHandler;