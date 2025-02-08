const { getRoles } = require("../../controllers/user/index");

const getRolesHandler = async (req, res) => {
  try {
    const response = await getRoles();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getRolesHandler;
