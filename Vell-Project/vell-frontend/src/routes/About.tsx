import Hero from "../components/Hero";
import Navbar from "../components/Navbar.";
import AboutImg from "../../assets/night.jpg";

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
    </>
  );
}
export default About;
