const { Router } = require("express");
const CourseRouter = Router();
const {
  getAllCoursesHandler,
  postThemeHandler,
  getThemeHandler,
  deleteCourseHandler,
  getCoursesHandler,
  postCoursetHandler,
  getCourseByIdHandler,
  postChapterHandler,
  getUserCoursesHandler,
  postChapterLectionHandler
} = require("../handlers/Course/_index.js");

// CourseRouter.get("/getAllCourses", getAllCoursesHandler);
CourseRouter.post("/", postCoursetHandler);
CourseRouter.get("/", getCoursesHandler);
CourseRouter.get("/:id", getCourseByIdHandler);
CourseRouter.get("/theme", getThemeHandler);
CourseRouter.post("/theme/:name", postThemeHandler);
CourseRouter.delete("/:id", deleteCourseHandler);
CourseRouter.post("/chapter", postChapterHandler);
CourseRouter.post("/chapter/lection", postChapterLectionHandler);
CourseRouter.get("/usercourses/:id", getUserCoursesHandler);

module.exports = CourseRouter;
