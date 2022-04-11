import React, { useState, useEffect } from "react";
import Menubar from "../Menubar/Menubar";
import Rides from "../Rides/Rides";
import axios from "axios";

import "./styles.css";

const Home = () => {
  const [rides, setRides] = useState();
  const [backupRide, setBackupRide] = useState();

  
  const filterByState = async (category) => {
    setRides(prevRides => {
      let newRides = []
      for(let i in backupRide)
      {
        if(category==="state" || backupRide[i].state===category)
        {
          newRides.push(backupRide[i]);
        }
      }
      prevRides = newRides;
      return prevRides
    });
  };
  const filterByCity = async (category) => {
    setRides(prevRides => {
      let newRides = []
      for(let i in backupRide)
      {
        if(category==="city" || backupRide[i].city===category)
        {
          newRides.push(backupRide[i]);
        }
      }
      prevRides = newRides;
      return prevRides
    });
  };
  const fetchNewest = async () => {
    setRides(prevRides => {
      let newRides = []
      for(let i in backupRide)
      {
        if(backupRide[i].date===Date())
        {
          newRides.push(backupRide[i]);
        }
      }
      prevRides = newRides;
      return prevRides
    });
  };

  const fetchUpcoming = async () => {
    setRides(prevRides => {
      let newRides = []
      for(let i in backupRide)
      {
        if(backupRide[i].date>Date())
        {
          newRides.push(backupRide[i]);
        }
      }
      prevRides = newRides;
      return prevRides
    });
  };
  const fetchPast = async () => {
    setRides(prevRides => {
      let newRides = []
      for(let i in backupRide)
      {
        if(backupRide[i].date<Date())
        {
          newRides.push(backupRide[i]);
        }
      }
      prevRides = newRides;
      return prevRides
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      var { data } = await axios.get(`https://assessment.api.vweb.app/rides`);
      console.log(data);

      var newRides = [];
      for (let i in data) {
        let mini = 100000;
        data[i].date = Date(data[i].date);
        let { station_path } = data[i];
        console.log({station_path});
        for (let j in station_path) {
          if (station_path[j] > 40)
            mini = Math.min(mini,station_path[j] - 40);
          else mini = Math.min(mini, 40 - station_path[j]);
          console.log(station_path[j]);
        }
        newRides.push({ ...data[i], distance: mini });
      }
      console.log({newRides});
      newRides.sort((x,y) => (x.distance>=y.distance)?1:-1);
      setRides(newRides);
      setBackupRide(newRides);
    };
    fetchData();
  }, []);
  console.log({rides})

  return (
    <>
      <div className="Home">
        <Menubar
          filterByCity={filterByCity}
          filterByState={filterByState}
          fetchNewest={fetchNewest}
          fetchUpcoming={fetchUpcoming}
          fetchPast={fetchPast}
        />
        <Rides rides={rides} />
      </div>
    </>
  );
};

export default Home;
