import React,{useEffect} from 'react';
import HomePage from './FunctionalComponents/HomePage/homepage-component'
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './ClassComponents/ShopComponent/shop.component'
import HeaderContainer from './FunctionalComponents/Header/header.container'
import SignInUp from './Authentication/signIn-Up.component'
//import { auth,createUserProfileDocument,addCollectionAndDocuments } from  './FireBase/firebase.utils'
import {checUserSession} from './Redux/User/user.action'
import {connect} from 'react-redux'
import {selectCurrentUser} from './Redux/User/user.selector'
import { createStructuredSelector } from 'reselect';

import CheckOutPage from './FunctionalComponents/CheckOut/checkoutPage.component'
//import {selectCollectionsForPreview} from './Redux/ShopData/shopDataMap.selector'


import './App.css';

const App = ({currentUser,checUserSession})=>{
//  componentDidMount=()=>{
//    const {checUserSession} =this.props;
//    checUserSession();
//   }

  // componentWillUnmount=()=>{
  //   this.unsubscribeFromAuth()
  // }
  useEffect(()=>
  {checUserSession()},
  [checUserSession])

 
   //console.log('user->',this.props.currentUser)
    return (
      <div>
        <HeaderContainer  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component= {ShopPage} />
          <Route  path='/signin' render={()=>currentUser ?(<Redirect to ='/' />):(<SignInUp />)} />
          <Route  path='/checkout' component= {CheckOutPage} />
        </Switch>
      
      </div>
    );
  }
  

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

 const mapDispatchToProps = dispatch=>({
  checUserSession: () => dispatch(checUserSession())
 });

export default connect(mapStateToProps,mapDispatchToProps)(App);
