const {Course, User}= require("../../db")

const getAllCourses= async ()=>{
    const Courses= Course.findAll({
        include: [
            {
              model: User,
              as: "creator",
              attributes: ["id", "name"],
            },
          ],
    });

    return Courses;
}

module.exports= getAllCourses;