import React, { useState } from 'react';

const ColorGenerator = () => {
  const [color, setColor] = useState('#000000'); // Initial color

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generates a random hexadecimal color code
    setColor(randomColor);
  };

  return (
    <div>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
      ></div>
      <button onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
};

export default ColorGenerator;
