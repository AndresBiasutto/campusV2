import Container from "../../layouts/Container";
import ListCoursesBtn from "../../components/atoms/ListCoursesBtn";
import LandingAboutUs from "../../components/templates/LandingAboutUs";
import LandingCarousel from "../../components/templates/LandingCarousel";
import LandingFeaturedCourses from "../../components/templates/LandingFeaturedCourses";

const Landing = () => {
  const LandingFeaturedCoursesTitle="Desarrolla tus habilidades"
  const LandingFeaturedCoursesText= "Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  return (
    <Container>
      <LandingCarousel />
      <LandingFeaturedCourses title={LandingFeaturedCoursesTitle} pContent={LandingFeaturedCoursesText} />
      <ListCoursesBtn />
      <LandingAboutUs />
    </Container>
  );
};

export default Landing;
