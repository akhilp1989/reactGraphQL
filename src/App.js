import React,{Component} from 'react';
import HomePage from './FunctionalComponents/HomePage/homepage-component'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './ClassComponents/ShopComponent/shop.component'
import Header from './FunctionalComponents/Header/header-component'
import SignInUp from './Authentication/signIn-Up.component'
import { auth,createUserProfileDocument } from  './FireBase/firebase.utils'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null

  componentDidMount=()=>{
   this.unsubscribeFromAuth= auth.onAuthStateChanged( async user=>{
     if(user){
      const userRef= await createUserProfileDocument(user)
      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
      })
    
     }
     this.setState({currentUser:user})
    
     
    })
    console.log(this.state)
  }

  componentWillUnmount=()=>{
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component= {ShopPage} />
          <Route exact path='/signin' component={SignInUp} />
        </Switch>
      
      </div>
    );
  }
  
}

export default App;
