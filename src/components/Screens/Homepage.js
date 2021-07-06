import React from "react";
import { Link } from "react-router-dom";

import HomeTile from "../../components/layout/HomeTile";
import CategoryButton from "../../components/layout/CategoryButton";

import tileImg from "../../assets/pana.png";

function Homepage() {
  return (
    <div className='container'>
      <h1 className='home-header'>Hello!</h1>

      <div className='home-section-holder'>
        <div className='home-tile-holder'>
          <HomeTile img={tileImg} text='Order grocery' route='/groceries' />
          <HomeTile img={tileImg} text='Order Food' route='/food' />
          <HomeTile img={tileImg} text='Ride with us' route='/ride' />
          <HomeTile img={tileImg} text='Send packages' route='/packages' />
          <HomeTile img={tileImg} text='Play' route='/play' />
          <HomeTile img={tileImg} text='Go Green' route='/green' />
        </div>
        <div className='home-buttons-holder'>
          <CategoryButton
            text='Track your investments'
            width='354px'
            route='invest'
          />
          <CategoryButton text='Sell with us' width='279px' route='sell' />
          <CategoryButton text='Offers' width='193px' route='offers' />
          <CategoryButton text='Chat' width='135px' route='chat' />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
