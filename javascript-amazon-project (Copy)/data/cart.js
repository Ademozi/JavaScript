// export let us use this variable outside this file
export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
},{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
}];

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
        quantity,
        deliveryOptionId: '1'
    });
    // same as: productId = productId
    // quantity = quantity
                    
    }
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);        
        }
    });

    cart = newCart;
}