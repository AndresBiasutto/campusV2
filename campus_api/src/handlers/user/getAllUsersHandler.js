const {getUsers} = require("../../controllers/user/index");

const getUsersHandler = async (req, res) => {
  try {
    const response = await getUsers();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUsersHandler;
