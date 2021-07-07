import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SplashScreen() {
  return (
    <div className='splash-screen'>
      <div className='center-holder'>
        <div className='logo'>
          <i class='fa fa-cube'></i>
        </div>
        <h1 className='logo-name'>Cuebe</h1>
        <Link to='/home'>
          <button className='splash-btn btn btn-primary btn-lg btn-block'>
            Lets go!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SplashScreen;
