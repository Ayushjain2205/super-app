import React from "react";
import { Link } from "react-router-dom";

function CtaButton({ text }) {
  let redirect;
  if (text === "Book") {
    redirect = "/scooter-booked";
  } else if (text === "Confirm") {
    redirect = "/my-wallet";
  } else {
    redirect = "/cart";
  }
  return (
    <Link to={redirect}>
      <div className='cta-btn'>
        <div>
          <div className='cta-items'>
            <div className='cta-circle'>1</div>
            <div>
              <h3>{text}</h3>
            </div>
            <div>
              <i class='fas fa-angle-right'></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CtaButton;
