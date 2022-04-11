import React from "react";

import avatar from '../../Images/avatar.svg';

import './styles.css';

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="logo">Edvora</div>
        <div className="user">
          <h3>Dhruv Singh</h3>
            <img src={avatar} alt="img" className="avatar" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
