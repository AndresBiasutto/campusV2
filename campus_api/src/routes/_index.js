const { Router } = require("express");
const authRouter = require("./AuthRouter");
const userRouter = require("./UserRouter");
const courseRouter= require("./CourseRouter");

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/course", courseRouter);
// router.use("public/", publicRouter);

module.exports = router;
