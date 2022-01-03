import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { getBasketTotal } from "../StateProvider/reducer";

function SubTotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <React.Fragment>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </React.Fragment>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
}

export default SubTotal;