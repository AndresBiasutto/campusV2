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
  postChapterLectionHandler,
  deleteChapterLectionHandler,
  deleteChapterHandler,
  getUserCourseChaptersHandler,
} = require("../handlers/Course/_index.js");

// CourseRouter.get("/getAllCourses", getAllCoursesHandler);
CourseRouter.post("/", postCoursetHandler);
CourseRouter.get("/", getCoursesHandler);
CourseRouter.get("/:id", getCourseByIdHandler);
CourseRouter.get("/theme", getThemeHandler);
CourseRouter.post("/theme/:name", postThemeHandler);
CourseRouter.delete("/delete/:courseId", deleteCourseHandler);
CourseRouter.get("/usercourses/:userId", getUserCoursesHandler);
CourseRouter.post("/chapter", postChapterHandler);
CourseRouter.delete("/chapter/delete/:chapterId", deleteChapterHandler);
CourseRouter.get("/chapter/:chapterId", getUserCourseChaptersHandler);
CourseRouter.post("/chapter/lection", postChapterLectionHandler);
CourseRouter.delete("/chapter/lection/delete/:lectionId", deleteChapterLectionHandler);

module.exports = CourseRouter;
