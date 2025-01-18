import Hero from "../components/Hero";
import Navbar from "../components/Navbar.";
import ContactImg from "../../assets/12.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        text=""
        btnClass="hide"
        btnName=""
        url="/"
      />
    </>
  );
}
export default Contact;
