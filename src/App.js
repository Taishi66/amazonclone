import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//Update Switch doesnt exist anymore, needs to be replaced by Routes, and Route should look like <Route path='/login' component={<Nav/>}
import Header from "./components/header/Header";
import Home from "./components/page/home/Home";
import Checkout from "./components/page/checkout/Checkout";
import Login from "./components/page/login/Login";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from "./firebase";


function App() {

  const [{ user }, dispatch] = useStateValue();
  //piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
    return () => {
      //any clean up operations go in here
      unsubscribe();
    };
  }, [dispatch]);

  console.log("USER IS >>", user);


  return (
    <div className='app'>
      <Routes>
        <Route path='*' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        {/*Bottom route is always the default route*/}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
