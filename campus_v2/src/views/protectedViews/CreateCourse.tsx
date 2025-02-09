import React from "react";
import Container from "../../layouts/Container";
// import CreateCourseHeader from "../../components/templates/CreateCourseHeader";
// import CreateCourseForm from "../../components/templates/CreateCourseForm";
// import { Outlet } from "react-router-dom";
import CreateCourseForm from "../../components/templates/CreateCourseForm";
// import CreateCourseData from "../../components/templates/CreateCourseData";

const CreateCourse: React.FC = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const nextStep = () => {
  //   if (currentStep < 3) setCurrentStep(currentStep + 1);
  // };
  // const prevStep = () => {
  //   if (currentStep > 1) setCurrentStep(currentStep - 1);
  // };

  // const steps = [
  //   "Información básica",
  //   "Agregar capítulos y lecciones",
  //   "Finalizar",
  // ];

  return (
    <Container>
      {/* <CreateCourseHeader steps={steps} currentStep={currentStep} /> */}
      <CreateCourseForm/>
      {/* {currentStep === 2 && <CreateCourseData />} */}
      {/* <div>
        <button onClick={prevStep}>prev step</button>
        <button onClick={nextStep}>next step</button>
      </div> */}

      {/* <Outlet /> */}
      {/* <CreateCourseForm /> */}
    </Container>
  );
};

export default CreateCourse;
