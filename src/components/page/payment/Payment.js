import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProduct from "../../checkoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../StateProvider/reducer";

function Payment() {
    // eslint-disable-next-line no-unused-vars
    const [{ user, basket }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [succeedeed, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const handleSubmit = (e) => {

    };

    const handleChange = (e) => {
        setDisable(e.empty);
        setError(e.error ? e.error.message : "");
    };

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
                    <div className='payment__details'>
                        {/*use Stripe magic*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <React.Fragment>
                                            <h3>Order Total : {value}</h3>
                                        </React.Fragment>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disable || succeedeed}>
                                    <span>{processing ? <p>Procesing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Payment;
