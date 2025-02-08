const { Router } = require("express");
const userRouter = Router();
const {
  getAllUsersHandler,
  postRoleHandler,
  getRoleHandler,
  deleteUserHandler
} = require("../handlers/user/_index.js");

userRouter.get("/getAllUsers", getAllUsersHandler);
userRouter.delete("/deleteUser/:id", deleteUserHandler);
userRouter.get("/roles", getRoleHandler);
userRouter.post("/roles/:name", postRoleHandler);

module.exports = userRouter;
