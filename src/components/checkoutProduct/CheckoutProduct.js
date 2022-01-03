import React from 'react';
import Star from "@mui/icons-material/Star";
import "./CheckoutProduct.css";
import SubTotal from "../subtotal/SubTotal";
import { useStateValue } from "../StateProvider/StateProvider"


function CheckoutProduct({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: "id"
        });
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <p>
                                <Star key={index} />
                            </p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            {basket?.length > 0 && (
                <div className="checkout_right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default CheckoutProduct
