import React ,{Component} from 'react'

class ErrorBoundary extends Component(){
    constructor(){
        super()
        this.state={
            hasErrored:false
        }
    }
static getDerivedStateFromError(error){
    //process the error
    return {hasErrored:true}
}

componentDidCatch(error,info){
    console.log(error)
}
     render(){
         if(this.state.hasErrored){
             return (<div>Something Went wrong</div>)
         }
         return this.props.children
      
     }
}

export default ErrorBoundary