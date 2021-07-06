import React from "react";

function categoryToast({ img, text }) {
  return (
    <div className='category-toast'>
      <img src={img} alt='' className='category-img' />
      <span className='category-name'>{text}</span>
    </div>
  );
}

export default categoryToast;
