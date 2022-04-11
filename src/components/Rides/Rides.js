import React from "react";

import "./rides.css";
import Ride from "./Ride/Ride";

const Rides = ({ rides }) => {
  return (
    <>
      <div className="Rides">
        {rides &&
          rides.map((ride) => {
            return <Ride key={ride.id} ride={ride} />;
          })}
      </div>
    </>
  );
};

export default Rides;
