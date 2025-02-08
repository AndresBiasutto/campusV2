const { Theme } = require("../../db");

const createTheme = (name) => {
  const newTheme = Theme.create({ name });
  return newTheme;
};

module.exports = createTheme;
