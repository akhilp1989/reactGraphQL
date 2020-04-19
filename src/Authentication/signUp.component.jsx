import React,{Component} from 'react'
import './signUp.styles.scss'
import { auth,createUserProfileDocument } from '../FireBase/firebase.utils'
import FormInput from '../FunctionalComponents/FormInput/form-input.component'
import ButtonComponent from '../FunctionalComponents/Button/button-component'

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
        const {displayName,email,password,confirmPassword}=this.state;
       // console.log(password,confirmPassword)
        
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
          //  console.log('Email->',email)
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user,{displayName})
           //To clear out the form
           this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
           })
           
                }
        catch(err){
            alert(err.message)

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
export default signUp 