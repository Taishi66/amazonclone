import React from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProduct from "../../checkoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  // eslint-disable-next-line no-unused-vars
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items & delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>Payment Method</div>
          <div className='payment__details'>{/*use Stripe magic*/}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
