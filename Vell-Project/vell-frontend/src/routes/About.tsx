import Hero from "../components/Hero";
import Navbar from "../components/Navbar.";
import AboutImg from "../../assets/night.jpg";
import AboutUs from "../components/About";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        text=""
        btnClass="hide"
        btnName=""
        url="/"
      />
      <AboutUs />
    </>
  );
}
export default About;
