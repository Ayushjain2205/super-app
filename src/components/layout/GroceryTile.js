import React from "react";

function GroceryTile({ img, name, desc, price }) {
  return (
    <div className='grocery-tile'>
      <div className='grocery-tile-top'>
        <div>
          <img src={img} alt='' srcset='' />
        </div>
      </div>
      <div className='grocery-tile-bottom'>
        <h3 className='grocery-item-name'>{name}</h3>
        <h6 className='grocery-item-sub'>{desc}</h6>
        <div className='grocery-tile-bottom-row'>
          <h4>₹{price}</h4>
          <div className='add-btn'>
            <i class='fas fa-plus'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroceryTile;
