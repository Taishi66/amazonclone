import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Update Switch doesnt exist anymore, needs to be replaced by Routes, and Route should look like <Route path='/login' component={<Nav/>}

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/checkout'>
            <h1>Checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>Login page</h1>
          </Route>
          {/*Bottom route is always the default route*/}
          <Route path='/'>
            <h1>Home page</h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
