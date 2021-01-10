import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";

const Hats = () => <div>Hats Page</div>;

function App() {
  return (
    <div className='App'>
      <Route path='/' exact component={Homepage} />
      <Route path='/shop/hats' component={Hats} />
    </div>
  );
}

export default App;
