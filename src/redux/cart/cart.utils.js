export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(x => x.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...addItemToCart.cartItem, quantity: cartItem.quantity + 1 }: cartItem);
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; // the item is not present in the cart
}