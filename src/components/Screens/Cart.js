import React from "react";
import cart from "../../assets/cart.png";

function Cart() {
  return (
    <div>
      <div className='center-cart'>
        <img src={cart} alt='' srcset='' />
        <div className='cart-msg-holder'>
          <h2 className='cart-msg'>Your product has been added to cart</h2>
        </div>
        <button className='cart-pay btn btn-primary btn-lg btn-block'>
          Select payment method
        </button>
      </div>
    </div>
  );
}

export default Cart;
