import React,{Component} from 'react';
import HomePage from './FunctionalComponents/HomePage/homepage-component'
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './ClassComponents/ShopComponent/shop.component'
import Header from './FunctionalComponents/Header/header-component'
import SignInUp from './Authentication/signIn-Up.component'
import { auth,createUserProfileDocument } from  './FireBase/firebase.utils'
import {setCurrentUser} from './Redux/User/user.action'
import {connect} from 'react-redux'
import {selectCurrentUser} from './Redux/User/user.selector'
import CheckOutPage from './FunctionalComponents/CheckOut/checkoutPage.component'

import './App.css';

class App extends Component {
 
  unsubscribeFromAuth=null
 

  componentDidMount=()=>{
   const{ setCurrentUser}=this.props
    
   this.unsubscribeFromAuth= auth.onAuthStateChanged( async user=>{
     if(user){
      const userRef= await createUserProfileDocument(user)
      userRef.onSnapshot(snapShot=>{
       
         setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
       
      })
    
     }
     setCurrentUser({user})
    
     
    })
   
  }

  componentWillUnmount=()=>{
    this.unsubscribeFromAuth()
  }
  render(){
   let loggedInUser=null
   if(this.props.currentUser){
     if(this.props.currentUser.user){
       loggedInUser=this.props.currentUser
     }
     else loggedInUser=null
   }
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
const mapStateToProps =state =>({
  currentUser:selectCurrentUser(state)
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
