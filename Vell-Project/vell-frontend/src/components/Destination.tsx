import ServiceImg from "../../assets/5.jpg";
import ServiceImg2 from "../../assets/3.jpg";
import "./styles/Destination.css";
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see the world.</p>

      <div className="first-des">
        <div className="des-text">
          <h2></h2>
          <p></p>
          <img src={ServiceImg}></img>
          <img src={ServiceImg2}></img>
        </div>
      </div>
    </div>
  );
}
export default Destination;
