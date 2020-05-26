import React,{Component} from 'react'
import './signUp.styles.scss'
import FormInput from '../FunctionalComponents/FormInput/form-input.component'
import ButtonComponent from '../FunctionalComponents/Button/button-component'
import {connect} from 'react-redux'
import {signUpStart } from '../Redux/User/user.action'

class signUp extends Component {
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    submitHandler=async(event)=>{
        event.preventDefault();
        const {singUpStart} =this.props;
        const {displayName,email,password,confirmPassword}=this.state;
       // console.log(password,confirmPassword)
       singUpStart({displayName,email,password})
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        }
    changeHandler =(event)=>{
        const {name,value}=event.target
     // console.log([name],value)
     this.setState({[name]:value})
       
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(

            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign Up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.submitHandler}>
            <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.changeHandler}
            label='Display Name'
            required
            />
             <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={this.changeHandler}
            label='Email'
            required
            />
              <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={this.changeHandler}
            label='Password'
            required
            />
              <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.changeHandler}
            label='Confirm password'
            required
            />
            <ButtonComponent type='submit'>Sign Up</ButtonComponent>

            </form>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
singUpStart:(userCred)=>dispatch(signUpStart(userCred))
})
export default connect(null,mapDispatchToProps)(signUp) 