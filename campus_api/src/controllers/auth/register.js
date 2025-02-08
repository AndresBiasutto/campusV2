const { User, Role } = require("../../db");
const crypto = require("crypto");
const sendVerificationEmail = require("../../libs/sendEmail");
const hashPassword = require("../../libs/hashPasword");

const register = async (name, e_mail, password, image, roles) => {
  try {
    const encriptedPassword = await hashPassword(password);
    const existingUser = await User.findOne({ where: { email: e_mail } });
    const verificationToken = crypto.randomBytes(32).toString("hex");    
    if (existingUser) {
      throw new Error("El usuario ya existe");
    }
    const newUser = await User.create({
      name,
      email: e_mail,
      password: encriptedPassword,
      image,
      verificationToken,
    });
    const defaultRole = roles
      ? await Role.findByPk(roles)
      : await Role.findOne({ where: { name: "student" } });
    await newUser.setRole(defaultRole);
    await sendVerificationEmail(e_mail, verificationToken);
    return "Registro exitoso, verifica tu email para activar la cuenta.";
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};

module.exports = register;
