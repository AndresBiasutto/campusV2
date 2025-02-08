const { Router } = require("express");
const authRouter = Router();
const {
  loginHandler,
  registerHandler,
  updateUserHandler,
  verifyToken
} = require("../handlers/auth/_index.js");

authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);
authRouter.patch("/updateUser/:id", updateUserHandler);
authRouter.get("/verify", verifyToken);


module.exports = authRouter;
