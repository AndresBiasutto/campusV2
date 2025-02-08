const { verify } = require("../../controllers/auth/index");

const verifyToken = async (req, res) => {
  const { token } = req.query;

  try {
    const message = await verify(token);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = verifyToken;
