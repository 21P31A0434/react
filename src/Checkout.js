// Checkout.js
import React from 'react';

const Checkout = ({ cartItems, total, handleCheckout }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Cart Items</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total: ${total}</h3>
      </div>
      <button onClick={handleCheckout}>Buy Now</button>
    </div>
  );
};

export default Checkout;
