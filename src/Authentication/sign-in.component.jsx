import React,{Component} from 'react'
import './sign-in.styles.scss'
import FormInput from '../FunctionalComponents/FormInput/form-input.component'
import ButtonComponent from '../FunctionalComponents/Button/button-component'
import {signInWithGoogle} from '../FireBase/firebase.utils'

class signIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
       this.setState({email:'',password:''})
    }
    changeHandler=(event)=>{
        const {value,name}=event.target
        this.setState({[name]:value})
        
    }
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an Account</h2>
            <span>Sign In with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                
                    <FormInput type='email' value={this.state.email} 
                    changeHandler={this.changeHandler} 
                    name="email" 
                    required='required'
                    label='Email' />
                    
                    <FormInput 
                    type="password" 
                    value={this.state.password} 
                    name='password' 
                    label='Password'
                    required='required'
                   
                    changeHandler={this.changeHandler}    />

                  <div className='buttons'>
                  <ButtonComponent  type="submit">Sign In </ButtonComponent>
                    <ButtonComponent   onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google </ButtonComponent>
                  </div>
                    
                </form>
            </div>
        )
    }
}
export default signIn


