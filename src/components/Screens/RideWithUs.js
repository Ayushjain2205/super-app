import React from "react";
import FAB from "../common/FAB";
import { Link } from "react-router-dom";
import MapComponent from "../common/Map";

function RideWithUs() {
  return (
    <div>
      <FAB />
      <div className='container'>
        <h1 className='page-name'>Ride with us</h1>
        <h2 className='page-sub'>Book an e-scooter</h2>
      </div>
      <div className='search-ride'>
        <h4>Lets find you!</h4>
        <div className='d-flex search-ride-box'>
          <input
            className='search-ride-field form-control me-2'
            placeholder='Enter Your Location'
            aria-label='Search'
          />
          <Link to='book-ride'>
            <button className='search-ride-btn btn btn-outline-success'>
              Go
            </button>
          </Link>
        </div>
        <div className='map-center'>
          <MapComponent height={500} width={1000} />
        </div>
      </div>
    </div>
  );
}

export default RideWithUs;
