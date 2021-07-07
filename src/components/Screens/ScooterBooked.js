import React from "react";
import cart from "../../assets/cart.png";

function ScooterBooked() {
  return (
    <div>
      <div className='scooter-center center-cart'>
        <img src={cart} alt='' srcset='' />
        <div className='cart-msg-holder'>
          <h2 className='scooter-msg cart-msg'>
            Your e-scooter has been booked!
          </h2>
          <h3 className='scooter-sub'>Scan the QR Code at the stand</h3>
        </div>
        <button className='cart-pay btn btn-primary btn-lg btn-block'>
          Select payment method
        </button>
      </div>
    </div>
  );
}

export default ScooterBooked;
