// const getAllCoursesHandler = require("./getAllCoursesHandler");
const postThemeHandler = require("./postThemeHandler");
const getThemeHandler = require("./getThemeHandler");
const postCoursetHandler = require("./postCourseHandler");
const getCoursesHandler = require("./getCoursetHandler");
const getCourseByIdHandler = require("./getCourseByIdHandler");
const deleteCourseHandler = require("./deleteCourseHandler");
const postChapterHandler = require("./postChapterHandler");
const getUserCoursesHandler = require("./getUserCoursesHandler");
const postChapterLectionHandler = require("./postChapterLectionHandler");
const deleteChapterLectionHandler = require("./deleteChapterLectionHandler");
const deleteChapterHandler = require("./deleteChapter");
const getUserCourseChaptersHandler = require("./getUserCourseChaptersHandler");

module.exports = {
  postThemeHandler,
  postCoursetHandler,
  getCoursesHandler,
  getThemeHandler,
  getCourseByIdHandler,
  deleteCourseHandler,
  postChapterHandler,
  getUserCoursesHandler,
  postChapterLectionHandler,
  deleteChapterLectionHandler,
  deleteChapterHandler,
  getUserCourseChaptersHandler
};
