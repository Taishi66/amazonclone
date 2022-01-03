import React from "react";
import "./Product.css";
import Star from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider/StateProvider";

function product({ id, title, image, price, rating }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
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
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
}

export default product;
