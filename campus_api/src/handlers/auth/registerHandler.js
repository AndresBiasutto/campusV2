const {register} = require( "../../controllers/auth/index")

const registerHandler = async (req, res) => {
  const { name, e_mail, password, image, roles } = req.body;
  try {
    const registerData = await register(name, e_mail, password, image, roles);
    res.status(200).json(registerData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = registerHandler;
