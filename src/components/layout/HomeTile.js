import React from "react";
import { Link } from "react-router-dom";

function HomeTile({ text, img, route }) {
  return (
    <Link to={route}>
      <div className='home-tile'>
        <img src={img} className='home-tile-img' alt='' />
        <h5 className='home-tile-text'>{text}</h5>
      </div>
    </Link>
  );
}

export default HomeTile;
