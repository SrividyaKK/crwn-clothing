import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';
import { isTemplateElement } from '@babel/types';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => <CartItem key={isTemplateElement.id} item={item} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

export default connect(mapStateToProps)(CartDropdown);