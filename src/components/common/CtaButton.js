import React from "react";

function CtaButton({ text }) {
  return (
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
  );
}

export default CtaButton;
