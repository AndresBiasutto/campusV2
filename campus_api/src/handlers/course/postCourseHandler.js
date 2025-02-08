const postCourse = require("../../controllers/course/postCourse");

const postCoursetHandler = async (req, res) => {
  try {
    console.log("Datos recibidos en la solicitud:", req.body); // 👀 Verifica qué datos recibe el backend
    
    const response = await postCourse(req.body);
    
    console.log("Curso creado con éxito:", response); // 👀 Verifica el resultado antes de enviarlo al frontend
    
    return res.status(201).json(response);
  } catch (error) {
    console.error("Error en postCoursetHandler:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCoursetHandler;
