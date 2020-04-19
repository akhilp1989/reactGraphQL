import React,{Component} from 'react'
import './sign-in.styles.scss'
import FormInput from '../FunctionalComponents/FormInput/form-input.component'
import ButtonComponent from '../FunctionalComponents/Button/button-component'
import {auth,signInWithGoogle} from '../FireBase/firebase.utils'

class signIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault()
        const {email,password}=this.state
        try{
            
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }
        catch (err){
            alert(err.message)
        }
       
    }
    changeHandler=(event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
        
    }
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an Account</h2>
            <span>Sign In with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                
                    <FormInput type='email' value={this.state.email} 
                    onChange={this.changeHandler} 
                    name="email" 
                    required='required'
                    label='Email' />
                    
                    <FormInput 
                    onChange={this.changeHandler}
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


