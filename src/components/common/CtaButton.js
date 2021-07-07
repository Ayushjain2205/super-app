import React from "react";
import { Link } from "react-router-dom";

function CtaButton({ text }) {
  const redirect = text === "Book" ? "/scooter-booked" : "/cart";
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
