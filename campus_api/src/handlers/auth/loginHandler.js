const { login } = require("../../controllers/auth/index");
const loginHandler = async (req, res) => {
  const { e_mail, password } = req.body;
  try {
    const loginData = await login(e_mail, password);
    res.status(200).json(loginData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = loginHandler;
