class Cart {
    cartItems; // same as: cartItems = undefined;
    localStorageKey; // same as: localStorageKey = undefined;

    // every time we create a new instance of the Cart class, the constructor function will run
    constructor(localStorageKey) {
        // set the localStorageKey for each instance
        this.localStorageKey = localStorageKey;

        // load the cart items from local storage for each instance
        this.loadFromStorage();
    }

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

        if (!this.cartItems) {
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },{
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        }
        };

        saveToStorage() {
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
        };

        addToCart(productId, quantity=1) {
        
            let matchingItem;

            // check if the product is already in the cart
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                    }
                });

            // if it in the cart, increase the quantity
            if (matchingItem) {
                matchingItem.quantity += quantity;
            } else {

            // if it is not in the cart, add it to the cart
            this.cartItems.push({
                productId, // shorthand property
                quantity,
                deliveryOptionId: '1'
            });
            // same as: productId = productId
            // quantity = quantity
                            
            }

            this.saveToStorage();
        };

        removeFromCart(productId) {
            const newCart = [];

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);        
                }
            });

            this.cartItems = newCart;

            this.saveToStorage();
        };

        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });

            matchingItem.deliveryOptionId = deliveryOptionId;

            this.saveToStorage(); 
        }
}



// create two instances of the Cart class
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');



console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);