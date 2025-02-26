const { Router } = require("express");
const CourseRouter = Router();
const {
  getAllCoursesHandler,
  postThemeHandler,
  getThemeHandler,
  deleteCourseHandler,
  getCoursesHandler,
  postCoursetHandler,
  getCourseByIdHandler
} = require("../handlers/Course/_index.js");

// CourseRouter.get("/getAllCourses", getAllCoursesHandler);
CourseRouter.post("/", postCoursetHandler);
CourseRouter.get("/", getCoursesHandler);
CourseRouter.get("/theme", getThemeHandler);
CourseRouter.get("/:id", getCourseByIdHandler);
CourseRouter.post("/theme/:name", postThemeHandler);
CourseRouter.delete("/:id", deleteCourseHandler)

module.exports = CourseRouter;
