const { Role } = require("../../db");

const createRole = (name) => {
  const newRole = Role.create({ name });
  return newRole;
};

module.exports = createRole;
