import React from 'react';

import map from '../../../Images/map.svg';

import './ride.css';

const Ride = ({ ride }) => {
  return (
    <>
        <div className="Ride">
            <div className="ride_left">
                <img src={map} alt="" />
            </div>
            <div className="ride_middle">
                <h4>Ride Id: <span>{ride.id}</span></h4>
                <h4>Origin Station: <span>{ride.origin_station_code}</span></h4>
                <h4>station_path: <span>{JSON.stringify(ride.station_path)}</span></h4>
                <h4>Date: <span>{Date(ride.date)}</span></h4>
                <h4>Distance: <span>{ride.distance}</span></h4>
            </div>
            <div className="ride_right">
                <h4>{ride.city}</h4>
                <h4>{ride.state}</h4>
            </div>
        </div>
    </>
  )
}

export default Ride