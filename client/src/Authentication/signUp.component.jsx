import React,{useState} from 'react'
import './signUp.styles.scss'
import FormInput from '../FunctionalComponents/FormInput/form-input.component'
import ButtonComponent from '../FunctionalComponents/Button/button-component'
import {connect} from 'react-redux'
import {signUpStart } from '../Redux/User/user.action'

const SignUp=({singUpStart})=>  {
    // constructor(){
    //     super()
    //     this.state={
            // displayName:'',
            // email:'',
            // password:'',
            // confirmPassword:''
    //     }
    // }

    const [userInfo,setUserInfo]=useState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
    })
    const {displayName,email,password,confirmPassword}=userInfo
    const submitHandler=async(event)=>{
        event.preventDefault();
       
      
       singUpStart({displayName,email,password})
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        }
    const changeHandler =(event)=>{
        const {name,value}=event.target
     // console.log([name],value)
     //this.setState({[name]:value})
     setUserInfo({...userInfo,[name]:value})
       
    }
    
        return(

            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign Up with your email and password</span>
            <form className='sign-up-form' onSubmit={submitHandler}>
            <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            onChange={changeHandler}
            label='Display Name'
            required
            />
             <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={changeHandler}
            label='Email'
            required
            />
              <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={changeHandler}
            label='Password'
            required
            />
              <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={changeHandler}
            label='Confirm password'
            required
            />
            <ButtonComponent type='submit'>Sign Up</ButtonComponent>

            </form>
            </div>
        )
    }


const mapDispatchToProps=dispatch=>({
singUpStart:(userCred)=>dispatch(signUpStart(userCred))
})
export default connect(null,mapDispatchToProps)(SignUp) 