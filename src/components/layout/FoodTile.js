import React from "react";

function FoodTile({ img, name, cost, rating, distance }) {
  return (
    <div>
      <div className='grocery-tile'>
        <div className='grocery-tile-top'>
          <img src={img} alt='' srcset='' />
        </div>
        <div className='grocery-tile-bottom'>
          <div className='grocery-top-group'>
            <h3 className='grocery-item-name'>{name}</h3>
            <h6>{rating}/5</h6>
          </div>
          <h6>{distance}km away</h6>
          <h5>₹{cost} for one </h5>
        </div>
      </div>
    </div>
  );
}

export default FoodTile;
