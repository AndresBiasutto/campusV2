const {User}= require("../../db")

const verifyEmail = async (req, res) => {
  const { token } = req.params;
  const SECRET = process.env.SECRET;

  try {
    const decoded = jwt.verify(token, SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    user.emailVerified = true;
    await user.save();

    res.status(200).json({ message: "Correo verificado con éxito." });
  } catch (error) {
    console.error("Error verificando correo:", error);
    res.status(400).json({ error: "Token inválido o expirado." });
  }
};

module.exports = verifyEmail;
