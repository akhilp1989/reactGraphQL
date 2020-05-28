import React from 'react'
import {connect} from 'react-redux'
import './header.styles.scss'
import {ReactComponent as Logo } from '../../images/header.svg'
import {Link} from 'react-router-dom'

import CartIcon from '../CartIcon/cart-icon.component'
import CartDropDown from '../CartDropDown/cart-dropDown.component'
import{selectShowCart} from '../../Redux/Cart/cart.selector'
import {selectCurrentUser} from '../../Redux/User/user.selector'
import { signOutStart } from '../../Redux/User/user.action';


const Header = ({ loggedInUser,showCart,signOut }) => {
 // console.log('LoggedIN->',loggedInUser)
    let loggedUser=''
   if(loggedInUser){
      //console.log('Logged In user exists')
       if(loggedInUser.id){
           //console.log('LoggedInUser.user-',loggedInUser.id)
           loggedUser= <div>
            
          <div className='option' onClick={signOut}>
           SIGN OUT
         </div> 
         
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
    loggedUser=<Link className='option' to='/signin'>
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
          {showCart ? <CartDropDown /> :null }
          
        </div>
      );
      
}
  const mapStateToProps = state => ({
      loggedInUser: selectCurrentUser(state),
      showCart:selectShowCart(state)
      
  });

  const mapDispatchToProps =dispatch=>({
    signOut:()=>dispatch(signOutStart())
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Header);