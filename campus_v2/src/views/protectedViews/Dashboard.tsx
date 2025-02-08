import Container from "../../layouts/Container";
import LandingFeaturedCourses from "../../components/templates/LandingFeaturedCourses";
import DashboardHeader from "../../components/templates/DashboardHeader";

const Dashboard = () => {
  return (
    <Container>
      <DashboardHeader />
      <LandingFeaturedCourses title="explorar cursos" pContent="" />
    </Container>
  );
};

export default Dashboard;
