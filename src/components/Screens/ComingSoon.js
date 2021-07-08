import React from "react";
import { Link } from "react-router-dom";
import comingSoon from "../../assets/HomeTiles/bro.png";

function ComingSoon() {
  return (
    <div className='coming-soon'>
      <div className='coming-soon-center center-holder'>
        <img src={comingSoon} alt='' srcset='' />
        <h1 className='coming-soon-logo logo-name'>Coming Soon :)</h1>
        <Link to='/home'>
          <button className='splash-btn btn btn-primary btn-lg btn-block'>
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;
