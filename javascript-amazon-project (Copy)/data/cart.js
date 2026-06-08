// export let us use this variable outside this file
export const cart = [];

export function addToCart(productId, quantity) {
    
    let matchingItem;

    // check if the product is already in the cart
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });

    // if it in the cart, increase the quantity
    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {

    // if it is not in the cart, add it to the cart
    cart.push({
        productId, // shorthand property
        quantity
    });
    // same as: productId = productId
    // quantity = quantity
                    
    }
}