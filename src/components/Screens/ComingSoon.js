import React from "react";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className='coming-soon'>
      <div className='center-holder'>
        <h1 className='logo-name'>Coming Soon :)</h1>
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
