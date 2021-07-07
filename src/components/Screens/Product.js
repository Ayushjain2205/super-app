import React from "react";
import FAB from "../common/FAB";
import banner from "../../assets/groceries-banner.png";
import product from "../../assets/product.png";
import CtaButton from "../common/CtaButton";

function Product() {
  return (
    <div>
      <FAB />
      <div className='container'>
        <div className='banner-holder'>
          <img src={banner} alt='' />
        </div>
        <h1 className='page-name'>Groceries</h1>
        <div className='product-sections'>
          <div className='product-image'>
            <img className='product-img' src={product} alt='' srcset='' />
          </div>
          <div className='product-desc'>
            <div className='product-top-row'>
              <h3>Apples</h3>
              <div className='product-icons'>
                <span>
                  <i class='fas fa-share-alt'></i>
                </span>
                <span>
                  <i class='far fa-heart'></i>
                </span>
              </div>
            </div>
            <h6 className='product-sub'>1kg, Price</h6>

            <div className='add-row'>
              <div className='add-section'>
                <i class='fas fa-minus'></i>
                <div className='quantity'>1</div>
                <i class='fas fa-plus'></i>
              </div>
              <h3>₹80</h3>
            </div>

            <div className='facts-section'>
              <h5>Product Detail</h5>
              <p>
                Apples are nutritious. Apples may be good for weight loss.
                apples may be good for your heart. As part of a healtful and
                varied diet.
              </p>
              <hr />
              <div className='detail-category'>
                <h5>Nutritions </h5>
                <i class='fas fa-chevron-right'></i>
              </div>
              <hr />
              <div className='detail-category'>
                <h5>Review </h5>
                <span>
                  <span className='stars'>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                  </span>
                  <i class='fas fa-chevron-right'></i>
                </span>
              </div>
            </div>
            <CtaButton text='Cart' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
