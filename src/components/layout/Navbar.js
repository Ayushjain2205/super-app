import React, { useContext } from "react";
import { Link } from "react-router-dom";

import navAvatar from "../../assets/navAvatar.png";
import arrowDown from "../../assets/arrow-down.png";

function Navbar() {
  return (
    <nav className='navbar '>
      <div class='nav-items'>
        <span className='app-name'>Cuebe</span>
        <div className='first-nav-section'>
          <Link to='/home'>
            <span className='nav-item'>Home</span>
          </Link>
          <span className='nav-item'>Order History</span>
        </div>
        <div className='search-section d-flex'>
          <input
            className='search-field form-control me-2'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='search-btn btn btn-outline-success'>Search</button>
        </div>
        <div className='profile-div'>
          <button
            className='btn btn-primary'
            style={{ borderRadius: "8px", marginRight: "50px" }}
          >
            <i class='fas fa-wallet'></i> {"\u00A0"} My Wallet
          </button>
          <img src={navAvatar} alt='' srcset='' />
          <img style={{ marginLeft: "5px" }} src={arrowDown} alt='' srcset='' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
