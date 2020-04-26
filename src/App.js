import React,{Component} from 'react';
import HomePage from './FunctionalComponents/HomePage/homepage-component'
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './ClassComponents/ShopComponent/shop.component'
import Header from './FunctionalComponents/Header/header-component'
import SignInUp from './Authentication/signIn-Up.component'
import { auth,createUserProfileDocument } from  './FireBase/firebase.utils'
import {setCurrentUser} from './Redux/User/user.action'
import {connect} from 'react-redux'

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
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component= {ShopPage} />
          <Route exact path='/signin' component={SignInUp} />
        </Switch>
      
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch=>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
