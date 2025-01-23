import Hero from "../components/Hero";
import Navbar from "../components/Navbar.";
import ServiceImg from "../../assets/5.jpg";
import RecentTrips from "../components/RecentTrips";

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
        <RecentTrips />
      </>
    </>
  );
}
export default Service;
