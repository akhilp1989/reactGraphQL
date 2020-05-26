import React,{Component} from 'react'
import './sign-in.styles.scss'
import FormInput from '../FunctionalComponents/FormInput/form-input.component'
import ButtonComponent from '../FunctionalComponents/Button/button-component'
//import {auth,signInWithGoogle} from '../FireBase/firebase.utils'
import {googleSignInStart,emailSignInStart} from '../Redux/User/user.action'
import {connect} from 'react-redux'
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
       const {emailSignInStart}=this.props //// We always destructure it so that we dont always have to call this.props.functoinName
        const {email,password}=this.state
        emailSignInStart(email,password);

        
      // console.log(this.state)
    }
    changeHandler=(event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
        
    }
    render(){
        const {googleSignInStart}=this.props
        //console.log('Props->',this.props)
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
                    <ButtonComponent type="button"
                     onClick={googleSignInStart} isGoogleSignIn >Sign In with Google </ButtonComponent>
                  </div>
                    
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password})),
    //signOut:()=>dispatch(signOutStart())

})

export default connect(null,mapDispatchToProps) (signIn)


