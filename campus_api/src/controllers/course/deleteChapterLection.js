const { Lection } = require("../../db");

const deleteChapterLection = async (lectionId) => {
  const lection = await Lection.findByPk(lectionId);
  const lectionName = lection.name;
  await Lection.destroy({ where: { id: lectionId } });

  return { data: ` ${lectionName} fue eliminado correctamente` };
};

module.exports = deleteChapterLection;
