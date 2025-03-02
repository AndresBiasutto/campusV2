const createTheme = require("./createTheme");
const getThemes = require("./getTheme");
const postCourse= require("./postCourse");
const getAllCourses= require("./getAllCourses");
const getCourseById= require("./getCourseById");
const postChapter= require("./postChapter");
const getUserCourses= require("./getUserCourses");
const postChapterLection= require("./postChapterLection");
const deleteChapterLection= require("./deleteChapterLection");
const deleteChapter= require("./deleteChapter");
const getUserCourseChapters= require("./getUserCourseChapters");
const deleteCourse= require("./deleteCourse");


module.exports = {deleteCourse, getUserCourseChapters, deleteChapter, deleteChapterLection, postChapterLection,getUserCourses, createTheme, getThemes, postCourse, getAllCourses, getCourseById , postChapter};