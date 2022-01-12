import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./components/StateProvider/StateProvider";
import reducer, { initialState } from "./components/StateProvider/reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51KEy4cDmMk6Hi8KcGP4CIgAJfw1Qe9d6wvGIO90nNfbbW4oJKGxJ3zbR30dtWkWttvK2obUlGZrvUBxUZsPdVTOc00bvIBtPbZ"
);

ReactDOM.render(


  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Elements stripe={promise}>
          <App />
        </Elements>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
