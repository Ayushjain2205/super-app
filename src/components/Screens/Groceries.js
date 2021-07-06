import React from "react";
import banner from "../../assets/groceries-banner.png";
import pulses from "../../assets/CategoryToasts/pulses.png";
import meat from "../../assets/CategoryToasts/meat.png";
import rice from "../../assets/CategoryToasts/rice.png";
import bakery from "../../assets/CategoryToasts/bakery.png";
import banana from "../../assets/TileImages/banana.png";
import apple from "../../assets/TileImages/apple.png";
import ginger from "../../assets/TileImages/ginger.png";

import CategoryToast from "../common/categoryToast";
import GroceryTile from "../layout/GroceryTile";
import FAB from "../common/FAB";

function Groceries() {
  return (
    <div>
      <FAB />
      <div className='container'>
        <div className='banner-holder'>
          <img src={banner} alt='' />
        </div>
        <h1 className='page-name'>Groceries</h1>
        <div className='category-toast-holder'>
          <CategoryToast img={pulses} text='Pulses' />
          <CategoryToast img={rice} text='Rice' />
          <CategoryToast img={bakery} text='Bakery' />
          <CategoryToast img={meat} text='Meat & Fish' />
        </div>
        <div className='grocery-tile-holder'>
          <GroceryTile
            img={banana}
            name='Organic Bananas '
            desc='7pc, Priceg'
            price='80'
          />
          <GroceryTile
            img={apple}
            name='Apples'
            desc='7pc, Priceg'
            price='120'
          />
          <GroceryTile
            img={ginger}
            name='Ginger '
            desc='7pc, Priceg'
            price='50'
          />
        </div>
      </div>
    </div>
  );
}

export default Groceries;
