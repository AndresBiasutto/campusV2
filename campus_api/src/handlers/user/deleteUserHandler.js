const {deleteUser}= require("../../controllers/user/index")

const deleteUserHandler= async (req, res)=>{
    const {id} = req.params;
    try {
      const response = await deleteUser(id);
      res.status(200).json(response)
    } catch (error) {
    return res.status(500).json({ error: error.message });
    }
  }

  module.exports=deleteUserHandler