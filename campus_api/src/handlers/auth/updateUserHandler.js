const { updateUser } = require("../../controllers/auth/index");

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  
  const { name, contactNumber, image, description } = req.body;
  try {
    const response = await updateUser(
      id,
      name,
      contactNumber,
      image,
      description
    );
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateUserHandler;
