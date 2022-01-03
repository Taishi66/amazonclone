import React from "react";
import "./Product.css";
import Star from "@mui/icons-material/Star";

function product({ id, title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <Star />
              </p>
            ))}
        </div>
        <img src={image} alt='' />
        <button>Add to basket</button>
      </div>
    </div>
  );
}

export default product;
