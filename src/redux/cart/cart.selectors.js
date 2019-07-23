import { createSelector } from 'reselect';

// input selector doesn't use createSelector
// output selector uses input selector and createSelector

// INPUT SELECTOR
const selectCart = state => state.cart; // returns a slice

export const selectCartItems = createSelector([selectCart], 
    (cart) => cart.cartItems);
// arg 1: array of input selectors

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accQty, cItem) => accQty + cItem.quantity, 0)
);