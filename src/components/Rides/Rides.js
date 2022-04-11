import React, { useEffect, useState } from "react";

import axios from "axios";

import "./rides.css";
import Ride from "./Ride/Ride";

const Rides = ({ rides }) => {
  // const [rides, setRides] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     var { data } = await axios.get("https://assessment.api.vweb.app/rides");
  //     console.log(data);
  //     setRides(data);
  //   };
  //   fetchData();
  // }, []);

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
