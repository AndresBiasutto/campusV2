const { User, Role } = require("../../db");

const getUsers = async () => {
  try {
    const users = await User.findAll({
      include: {
        model: Role,
        attributes: ["name", "id"],
      },
    });
    return users;
  } catch (error) {
    console.error("Error al obtener la lista de usuarios:", error);
    throw error;
  }
};

module.exports = getUsers;
