import React from 'react'
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckOutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_zP8JoFBOgGhCob3BiTihV8Hq00ObEjAA4l'
    
    const onToken =token =>{
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckOut 
        label='Pay Now'
        name='GraphQL Tutorial'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )

}

export default StripeCheckOutButton