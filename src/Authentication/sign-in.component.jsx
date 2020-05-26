import React,{useState} from 'react'
import './sign-in.styles.scss'
import FormInput from '../FunctionalComponents/FormInput/form-input.component'
import ButtonComponent from '../FunctionalComponents/Button/button-component'
//import {auth,signInWithGoogle} from '../FireBase/firebase.utils'
import {googleSignInStart,emailSignInStart} from '../Redux/User/user.action'
import {connect} from 'react-redux'


const SignIn = ({emailSignInStart,googleSignInStart})=> {
  const [userCred,setUserCred]=useState({email:'',password:''})
  const {email,password}=userCred
    const handleSubmit= async event=>{
        event.preventDefault()
      // const {emailSignInStart}=this.props //// We always destructure it so that we dont always have to call this.props.functoinName
        emailSignInStart(email,password);

    }
    const changeHandler=(event)=>{
        const {name,value}=event.target
        setUserCred({...userCred,[name]:value})
        
    }
        return(
            <div className='sign-in'>
            <h2>I already have an Account</h2>
            <span>Sign In with your email and password</span>
                
                <form onSubmit={handleSubmit}>
                
                    <FormInput type='email' value={email} 
                    onChange={changeHandler} 
                    name="email" 
                    required='required'
                    label='Email' />
                    
                    <FormInput 
                    onChange={changeHandler}
                    type="password" 
                    value={password} 
                    name='password' 
                    label='Password'
                    required='required'
                   
                    changeHandler={changeHandler}    />

                  <div className='buttons'>
                  <ButtonComponent  type="submit">Sign In </ButtonComponent>
                    <ButtonComponent type="button"
                     onClick={googleSignInStart} isGoogleSignIn >Sign In with Google </ButtonComponent>
                  </div>
                    
                </form>
            </div>
        )
    
}
const mapDispatchToProps = dispatch =>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password})),
})
export default connect(null,mapDispatchToProps) (SignIn)


