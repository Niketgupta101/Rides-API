import React, { useState } from 'react';
import Menubar from '../Menubar/Menubar';
import Rides from '../Rides/Rides';
import axios from 'axios';

import './styles.css';

const Home = () => {
  const [rides, setRides] = useState();

  const filterByState = async (category) => {
      var { data } = await axios.get(`https://git.heroku.com/edvora-assignment.git/rides/state/${category}`);
      console.log(data);
      setRides(data);
  }
  const filterByCity = async (category) => {
    var { data } = await axios.get(`https://git.heroku.com/edvora-assignment.git/rides/city/${category}`);
    console.log(data);
    setRides(data);
  }
  const fetchNewest = async () => {
    var { data } = await axios.get(`https://git.heroku.com/edvora-assignment.git/rides/newest`);
    console.log(data);
    setRides(data);
  }

  const fetchUpcoming = async () => {
    var { data } = await axios.get(`https://git.heroku.com/edvora-assignment.git/rides/upcoming`);
    console.log(data);
    setRides(data);
  }
  const fetchPast = async () => {
    var { data } = await axios.get(`https://git.heroku.com/edvora-assignment.git/rides/past`);
    console.log(data);
    setRides(data);
  }

  return (
    <>
        <div className="Home">
            <Menubar filterByCity={filterByCity} filterByState={filterByState} fetchNewest={fetchNewest} fetchUpcoming={fetchUpcoming} fetchPast={fetchPast}/>
            <Rides rides={rides}/>
        </div>
    </>
  )
}

export default Home