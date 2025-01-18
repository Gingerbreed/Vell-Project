import Hero from "../components/Hero";
import Navbar from "../components/Navbar.";
import ServiceImg from "../../assets/5.jpg";

function Service() {
  return (
    <>
      <>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={ServiceImg}
          title="Service"
          text=""
          btnClass="hide"
          btnName=""
          url="/"
        />
      </>
    </>
  );
}
export default Service;
