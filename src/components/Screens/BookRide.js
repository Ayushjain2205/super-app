import React from "react";
import FAB from "../common/FAB";

import MapComponent from "../common/Map";
import CtaButton from "../common/CtaButton";

function BookRide() {
  return (
    <div>
      <FAB />
      <div className='container'>
        <h1 className='page-name'>Ride with us</h1>
        <h2 className='page-sub'>Book an e-scooter</h2>
      </div>
      <div className='search-ride'>
        <div className='map-center'>
          <MapComponent height={500} width={500} />
          <div className='ride-location'>
            <h4>E-Scooter stands in Santacruz West </h4>
            <hr />
            <div className='add-scooter-tile'>
              <h3 className='scooter-location'>Opposite Raheja Park</h3>
              <h6 className='scooter-distance'>600m away</h6>
              <div className='grocery-tile-bottom-row'>
                <h4 className='scooter-cost'>₹100/hr</h4>
                <div className='add-btn'>
                  <i class='fas fa-plus'></i>
                </div>
              </div>
            </div>
            <hr />
            <div className='add-scooter-tile'>
              <h3 className='scooter-location'>Opposite Raheja Park</h3>
              <h6 className='scooter-distance'>600m away</h6>
              <div className='grocery-tile-bottom-row'>
                <h4 className='scooter-cost'>₹100/hr</h4>
                <div className='add-btn'>
                  <i class='fas fa-plus'></i>
                </div>
              </div>
            </div>
            <hr />
            <CtaButton text='Book' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRide;
