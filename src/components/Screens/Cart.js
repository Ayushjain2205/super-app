import React from "react";
import cart from "../../assets/cart.png";

import checkout from "../../services/checkout";

function Cart() {
  // checkout(100);
  return (
    <div>
      <div className='center-cart'>
        <img src={cart} alt='' srcset='' />
        <div className='cart-msg-holder'>
          <h2 className='cart-msg'>Your product has been added to cart</h2>
        </div>
        <a
          href='https://sandboxcheckout.rapyd.net/?token=checkout_e033ceb52f437e3721642efce1a4a33a'
          target='_blank'
          rel='noreferrer'
        >
          <button className='cart-pay btn btn-primary btn-lg btn-block'>
            Checkout
          </button>
        </a>
      </div>
    </div>
  );
}

export default Cart;
