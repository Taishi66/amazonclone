import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//Update Switch doesnt exist anymore, needs to be replaced by Routes, and Route should look like <Route path='/login' component={<Nav/>}
import Header from "./components/Header";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/checkout' />
        <Route path='/login' />
        {/*Bottom route is always the default route*/}
        <Route path='/' element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
