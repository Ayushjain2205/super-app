import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div>
        <h1> This is the homepage</h1>
        <Link to='/wallet'>Wallet</Link>
      </div>
    </div>
  );
}

export default Homepage;
