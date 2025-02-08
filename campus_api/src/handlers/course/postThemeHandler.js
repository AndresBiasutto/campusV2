const {createTheme}= require("../../controllers/course/_index");

const postThemeHandler = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await createTheme(name);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postThemeHandler;
