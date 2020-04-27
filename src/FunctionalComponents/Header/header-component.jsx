import React from 'react'
import {connect} from 'react-redux'
import './header.styles.scss'
import {ReactComponent as Logo } from '../../images/header.svg'
import {Link} from 'react-router-dom'
import {auth} from '../../FireBase/firebase.utils'
import CartIcon from '../CartIcon/cart-icon.component'
import CartDropDown from '../CartDropDown/cart-dropDown.component'

const Header = ({ loggedInUser,showCart }) => {
    var loggedUser=''
   if(loggedInUser){
      //console.log('Logged In user exists')
       if(loggedInUser.id){
           console.log('LoggedInUser.user-',loggedInUser.id)
           loggedUser= <div className='option' onClick={() => auth.signOut()}>
           SIGN OUT
         </div> 
       }
       else{
        //console.log('LoggedInUser.After-',loggedInUser.user)
        loggedUser=<Link className='option' to='/signin'>
        SIGN IN
      </Link> 
       }
   }
   else{
       //console.log('No user logged in')
    loggedUser=<Link className='option' to='/signn'>
    SIGN IN
  </Link>
   }
    return (
        <div className='header'>
          <Link className='logo-container' to='/'>
            <Logo className='logo' />
          </Link>
          <div className='options'>
            <Link className='option' to='/shop'>
              SHOP
            </Link>
            <Link className='option' to='/shop'>
              CONTACT
            </Link>
            
              {loggedUser}
              <CartIcon />
          </div>
          {showCart ? (<CartDropDown />):null}
          
        </div>
      );
      
}
  const mapStateToProps = state => ({
      loggedInUser: state.user.currentUser,
      showCart:state.cart.show

    
  });
  
  export default connect(mapStateToProps)(Header);