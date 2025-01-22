import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar.";
import RecentTrips from "../components/RecentTrips";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="home-hero"
        heroImg="https://plus.unsplash.com/premium_photo-1661961265428-892a41f01aca?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Where will you Vell to?"
        text="Plan your next trip now!"
        btnClass="show"
        btnName="Travel Plans"
        url="/"
      />
      <Destination />
      <RecentTrips />
    </>
  );
}
export default Home;
