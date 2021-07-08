import React from "react";
import { Link } from "react-router-dom";
import FAB from "../common/FAB";
import HomeTile from "../../components/layout/HomeTile";
import CategoryButton from "../../components/layout/CategoryButton";

import ludo from "../../assets/Games/ludo.png";
import snakes from "../../assets/Games/snakes.png";
import soccer from "../../assets/Games/soccer.png";
import basketball from "../../assets/Games/basketball.png";
import beer from "../../assets/Games/beer.png";
import bowling from "../../assets/Games/bowling.png";

function Games() {
  return (
    <div>
      <FAB />
      <div className='container'>
        <h1 className='page-name'>Games</h1>
        <h5 className='games-sub'>What do you wanna play?</h5>
        <div className='games-holder'>
          <div className='home-tile-holder'>
            <HomeTile img={ludo} text='Ludo' route='/coming-soon' />
            <HomeTile
              img={snakes}
              text='Snakes & Ladders'
              route='/coming-soon'
            />
            <HomeTile img={soccer} text='Soccer' route='/coming-soon' />
            <HomeTile img={basketball} text='Baketball' route='/coming-soon' />
            <HomeTile img={beer} text='Beer Pong' route='/coming-soon' />
            <HomeTile img={bowling} text='Bowling' route='/coming-soon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
