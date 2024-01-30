import React, { useState } from 'react';

function Count() {
  const [counter, setCount] = useState(0);

  const incrementCount = () => {
    if (counter < 10) {
      setCount(counter + 1);
    }
  };

  const decrementCount = () => {
    if (counter > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default Count;