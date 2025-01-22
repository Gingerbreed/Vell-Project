import DestinationData from "./DestinationData";
import ServiceImg from "../../assets/5.jpg";
import ServiceImg2 from "../../assets/3.jpg";
import "./styles/Destination.css";
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see the world.</p>
      <DestinationData
        heading="Manuel Antonio National Park"
        text="Insert more text here."
        img1={ServiceImg}
        img2={ServiceImg2}
        className="first-des"
      />
      <DestinationData
        heading="Manuel Antonio National Park"
        text="Insert more text here."
        img1={ServiceImg}
        img2={ServiceImg2}
        className="first-des-reverse"
      />
      <DestinationData
        heading="Manuel Antonio National Park"
        text="Insert more text here."
        img1={ServiceImg}
        img2={ServiceImg2}
        className="first-des"
      />
    </div>
  );
}
export default Destination;
