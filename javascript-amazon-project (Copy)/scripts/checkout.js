import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js'
// import '../data/backend-practice.js'

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
// same as creating a function that calls the two functions above
//  and then passing that function as a callback to loadProducts()