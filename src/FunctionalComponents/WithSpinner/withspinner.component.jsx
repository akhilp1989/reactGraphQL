import React from 'react'
import {SpinnerContainer,SpinnerOverlay} from './withspinner.styles'

const withSpinner=WrappedComponent=>{
    const spinner=({isLoading,...otherProps})=>
    {
       // console.log('Going in spinner->',isLoading)
    return isLoading?(
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>

    ):
    <WrappedComponent {...otherProps} />
}
return spinner
}

export default withSpinner;