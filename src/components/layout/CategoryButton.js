import React from "react";
import { Link } from "react-router-dom";

function CategoryButton({ text, width, route }) {
  return (
    <Link to={route}>
      <div>
        <button
          className='category-btn btn btn-primary'
          style={{ width: width }}
        >
          <span>{text}</span>
          <span className='end-open'>
            <i class='fas fa-angle-right'></i>
          </span>
        </button>
      </div>
    </Link>
  );
}

export default CategoryButton;
