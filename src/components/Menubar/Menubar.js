import React, { useEffect, useState } from "react";

import filter from "../../Images/filter.svg";

import "./styles.css";

const Menubar = ({ fetchNewest, fetchPast, fetchUpcoming, filterByCity, filterByState }) => {
  const [tab, setTab] = useState("newest");
  const [filterDisplay, setFilterDisplay] = useState("none");

  const handleTabChange = (e) => {
    setTab(e.target.name);
  };

  const handleFilterDisplay = () => {
      setFilterDisplay(prevValue => (prevValue==="none")? "flex": "none" );
  }

  useEffect(() => {
    if(tab==="newest")
    fetchNewest();
    else if(tab==="upcoming")
    fetchUpcoming();
    else
    fetchPast();
  },[tab])

  const handleStateChange = async (e) =>{
    await filterByState(e.target.value);
  }

  const handleCityChange = async (e) =>{
    await filterByCity(e.target.value);
  }

  return (
    <>
      <div className="Menubar">
        <div className="menubar_left">
          <button
            name="newest"
            className={tab === "newest" ? "currentTab" : "tab"}
            onClick={handleTabChange}
          >
            Newest Rides
          </button>
          <button
            name="upcoming"
            className={tab === "upcoming" ? "currentTab" : "tab"}
            onClick={handleTabChange}
          >
            Upcoming Rides
          </button>
          <button
            name="past"
            className={tab === "past" ? "currentTab" : "tab"}
            onClick={handleTabChange}
          >
            Past Rides
          </button>
        </div>
        <div className="filters" onClick={handleFilterDisplay}>
          <img src={filter} alt="img" />
          <h4>Filters</h4>
        </div>
        <div className="filterBox" style={{ display: filterDisplay }}>
          <div className="filter_header">
            <h3>Filters</h3>
            <h4 className="closeBtn" onClick={handleFilterDisplay}>X</h4>
          </div>
          <select name="state" id="state" onClick={handleStateChange}>
            <option value="state">State</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>
          <select name="state" id="state" onClick={handleCityChange}>
            <option value="city">City</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Srirampore">Srirampore</option>
            <option value="Silvassa">Silvassa</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Menubar;
