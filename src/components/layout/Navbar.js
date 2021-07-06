import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { logoutUser } from "../../services/magic";
import Button from "react-bootstrap/Button";

function Navbar() {
  return (
    <nav className='navbar '>
      <div class='nav-items'>hello</div>
    </nav>
  );
}

export default Navbar;
