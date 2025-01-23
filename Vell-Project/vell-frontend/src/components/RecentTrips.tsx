import TripData from "./RecentTripData";
import "./styles/RecentTrips.css";
import Trip1 from "../../assets/1.jpg";
import Trip2 from "../../assets/4.jpg";
import Trip3 from "../../assets/9.jpg";

function RecentTrips() {
  return (
    <div className="trip">
      <h1> Recent Trips</h1>
      <p>
        You can discover unique destinations through locals, not through a maps
        app.
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          text={"The air is nice and pretty."}
          heading={"Japan"}
        />
        <TripData
          image={Trip2}
          text={"The air is nice and pretty."}
          heading={"Ecuador"}
        />
        <TripData
          image={Trip3}
          text={"The air is nice and pretty."}
          heading={"Belgium"}
        />
      </div>
    </div>
  );
}

export default RecentTrips;
