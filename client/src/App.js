import React,{useEffect,lazy,Suspense} from 'react';
//import HomePage from './FunctionalComponents/HomePage/homepage-component'
import {Route,Switch,Redirect} from 'react-router-dom'
//import ShopPage from './ClassComponents/ShopComponent/shop.component'
import Header from './FunctionalComponents/Header/header-component'
//import SignInUp from './Authentication/signIn-Up.component'
//import { auth,createUserProfileDocument,addCollectionAndDocuments } from  './FireBase/firebase.utils'
import {checUserSession} from './Redux/User/user.action'
import {connect} from 'react-redux'
import {selectCurrentUser} from './Redux/User/user.selector'
import { createStructuredSelector } from 'reselect';
import './App.css';
import ErrorBoundary from './ClassComponents/Error-Bound/error-bound.component'
//import CheckOutPage from './FunctionalComponents/CheckOut/checkoutPage.component'
//import {selectCollectionsForPreview} from './Redux/ShopData/shopDataMap.selector'
const HomePage=lazy(()=>import('./FunctionalComponents/HomePage/homepage-component'));
const ShopPage=lazy(()=>import('./ClassComponents/ShopComponent/shop.component'));
const SignInUp=lazy(()=>import('./Authentication/signIn-Up.component'));
const CheckOutPage=lazy(()=>import('./FunctionalComponents/CheckOut/checkoutPage.component'));




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
        <Header  />
        
        <Switch>
         <ErrorBoundary>
            <Suspense fallback={<div>....Loading</div>}>
              <Route exact path='/' component={HomePage} />
              <Route  path='/shop' component= {ShopPage} />
              <Route  path='/signin' render={()=>currentUser ?(<Redirect to ='/' />):(<SignInUp />)} />
              <Route  path='/checkout' component= {CheckOutPage} />
            </Suspense>
         </ErrorBoundary>
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
