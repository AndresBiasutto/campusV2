const {Course, User, Theme}= require("../../db")

const getCourseById= async (id)=>{
    const Courses= Course.findByPk(id,{
        include: [
            {
              model: User,
              as: "creator",
              attributes: ["id", "name"],
            },
            {
              model: Theme,
              as: "Theme",
              attributes: ["id", "name"],
            }
          ],
    });

    console.log(Courses);
    

    return Courses;
}

module.exports= getCourseById;