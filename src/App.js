import React from 'react';
import HomePage from './FunctionalComponents/HomePage/homepage-component'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './ClassComponents/ShopComponent/shop.component'
import Header from './FunctionalComponents/Header/header-component'
import SignInUp from './Authentication/signIn-Up.component'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component= {ShopPage} />
        <Route exact path='/signIn' component={SignInUp} />
      </Switch>
    
    </div>
  );
}

export default App;
