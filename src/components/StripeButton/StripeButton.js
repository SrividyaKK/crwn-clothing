import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100; // stripe wants price in cents
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    console.log('pk: ', publishableKey);

    const onToken = token => {
        console.log('Token: ', token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay now'
            name='CRWN Clothing, Inc.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;