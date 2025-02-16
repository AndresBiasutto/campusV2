const { User, Role, Course, Theme } = require("../../db");
const comparePassword = require("../../libs/comparePassword");
const jwt = require("jsonwebtoken");

const login = async (e_mail, password) => {
  const SECRET = process.env.SECRET;

  // Buscar el usuario junto con el rol
  const userFound = await User.findOne({
    where: { email: e_mail },
    include: [
      {
        model: Role,
        attributes: ["name", "id"],
      },
      {
        model: Course,
        as: "createdCourses",
        attributes: ["name", "id", "description", "image"],
        include: {
          model: Theme,
          as: "Theme",
          attributes: ["name"],
        },
      },
    ],
  });

  if (!userFound) {
    return { message: "Usuario no encontrado" };
  }
  const matchPassword = await comparePassword(password, userFound.password);
  if (!matchPassword) {
    return { token: null, message: "Contraseña inválida" };
  }
  if (!userFound.emailVerified) {
    return {
      message:
        "email no verificado, revisa tu correo electronico para verificalo.",
    };
  }
  const roleName = userFound.Role ? userFound.Role.name : "Sin rol asignado";

  const token = jwt.sign({ id: userFound.id }, SECRET, { expiresIn: 84600 });

  const response = {
    id: userFound.id,
    name: userFound.name,
    email: userFound.email,
    role: roleName,
    token: token,
    image: userFound.image,
    contactNumber: userFound.contactNumber,
    description: userFound.description,
    department: userFound.department,
    creator: userFound.creator,
    createdCourses: userFound.createdCourses,
  };

  return response;
};
module.exports = login;
