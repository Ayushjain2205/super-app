import React from "react";
import banner from "../../assets/food-banner.png";
import indian from "../../assets/CategoryToasts/indian.png";
import mexican from "../../assets/CategoryToasts/mexican.png";
import italian from "../../assets/CategoryToasts/italian.png";
import chinese from "../../assets/CategoryToasts/chinese.png";
import salad from "../../assets/TileImages/salad.png";
import leon from "../../assets/TileImages/leon.png";
import dominos from "../../assets/TileImages/dominos.png";

import CategoryToast from "../common/categoryToast";
import FAB from "../common/FAB";
import FoodTile from "../layout/FoodTile";

function Restaurants() {
  return (
    <div>
      <FAB />
      <div className='container'>
        <div className='banner-holder'>
          <img src={banner} alt='' />
        </div>
        <h1 className='page-name'>Restaurants</h1>
        <div className='category-toast-holder'>
          <CategoryToast img={indian} text='Indian' />
          <CategoryToast img={mexican} text='Mexican' />
          <CategoryToast img={italian} text='Italian' />
          <CategoryToast img={chinese} text='Chinese' />
        </div>
        <div className='grocery-tile-holder'>
          <FoodTile
            img={salad}
            name='Bombay Salad'
            rating='3.5'
            distance='10'
            cost='499'
          />
          <FoodTile
            img={leon}
            name='Leon Grill'
            rating='4.5'
            distance='8'
            cost='799'
          />
          <FoodTile
            img={dominos}
            name='Dominos Pizza'
            rating='4.2'
            distance='2'
            cost='299'
          />
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
