const {deleteRole}= require("../../controllers/user/index")

const deleteRoleHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await deleteRole(id); // Usar User directamente aquí
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports= deleteRoleHandler