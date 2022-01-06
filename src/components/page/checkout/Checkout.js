import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../../checkoutProduct/CheckoutProduct";
import SubTotal from "../../subtotal/SubTotal";


function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              Hi {(user?.email) ? user.email : "Guest"},<br /> you have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Hi {user?.email}, here's your Shopping Basket</h2>
            {/* List of all the products */}
            {basket?.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
