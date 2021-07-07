import React from "react";
import { Link } from "react-router-dom";

import HomeTile from "../../components/layout/HomeTile";
import CategoryButton from "../../components/layout/CategoryButton";

import food from "../../assets/HomeTiles/food.png";
import green from "../../assets/HomeTiles/green.png";
import groceries from "../../assets/HomeTiles/groceries.png";
import packages from "../../assets/HomeTiles/packages.png";
import play from "../../assets/HomeTiles/play.png";
import ride from "../../assets/HomeTiles/ride.png";

function Homepage() {
  return (
    <div className='container'>
      <h1 className='home-header'>Welcome to Cuebe!</h1>

      <div className='home-section-holder'>
        <div className='home-tile-holder'>
          <HomeTile img={groceries} text='Order grocery' route='/groceries' />
          <HomeTile img={food} text='Order Food' route='/food' />
          <HomeTile img={ride} text='Ride with us' route='/ride' />
          <HomeTile img={packages} text='Send packages' route='/packages' />
          <HomeTile img={play} text='Play' route='/play' />
          <HomeTile img={green} text='Go Green' route='/coming-soon' />
        </div>
        <div className='home-buttons-holder'>
          <CategoryButton
            text='Track your investments'
            width='354px'
            route='coming-soon'
          />
          <CategoryButton
            text='Sell with us'
            width='279px'
            route='coming-soon'
          />
          <CategoryButton text='Offers' width='193px' route='coming-soon' />
          <CategoryButton text='Chat' width='135px' route='chat' />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
