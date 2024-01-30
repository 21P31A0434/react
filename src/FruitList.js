// FruitList.js
import React, { useState } from 'react';

const FruitList = ({ fruits, addToCart, buyNow }) => {
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - ${fruit.price}
            <button onClick={() => addToCart(fruit)}>Add to Cart</button>
            <button onClick={() => buyNow(fruit)}>Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
