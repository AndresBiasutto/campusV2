const { User } = require("../../db");

const verify = async (token) => {
  const user = await User.findOne({ where: { verificationToken: token } });
  if (!user) {
    throw new Error("Token inválido o expirado.");
  }
  user.emailVerified = true;
  user.verificationToken = null;
  await user.save();
  return "Cuenta verificada exitosamente. Ahora puedes iniciar sesión.";
};

module.exports = verify;
