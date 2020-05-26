import React,{Component} from 'react';
import HomePage from './FunctionalComponents/HomePage/homepage-component'
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './ClassComponents/ShopComponent/shop.component'
import Header from './FunctionalComponents/Header/header-component'
import SignInUp from './Authentication/signIn-Up.component'
//import { auth,createUserProfileDocument,addCollectionAndDocuments } from  './FireBase/firebase.utils'
import {checUserSession} from './Redux/User/user.action'
import {connect} from 'react-redux'
import {selectCurrentUser} from './Redux/User/user.selector'
import { createStructuredSelector } from 'reselect';

import CheckOutPage from './FunctionalComponents/CheckOut/checkoutPage.component'
//import {selectCollectionsForPreview} from './Redux/ShopData/shopDataMap.selector'


import './App.css';

class App extends Component {
 
  unsubscribeFromAuth=null
 

  componentDidMount=()=>{
   const {checUserSession} =this.props;
   checUserSession();
  }

  componentWillUnmount=()=>{
    this.unsubscribeFromAuth()
  }
  render(){
    let loggedInUser=this.props.currentUser
   //console.log('user->',this.props.currentUser)
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component= {ShopPage} />
          <Route  path='/signin' render={()=>loggedInUser ?(<Redirect to ='/' />):(<SignInUp />)} />
          <Route  path='/checkout' component= {CheckOutPage} />
        </Switch>
      
      </div>
    );
  }
  
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

 const mapDispatchToProps = dispatch=>({
  checUserSession: () => dispatch(checUserSession())
 });

export default connect(mapStateToProps,mapDispatchToProps)(App);
