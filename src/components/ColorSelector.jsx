// components/ColorSelector.js
import React from 'react';

const ColorSelector = ({ variants, selectedColor, onColorSelect }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Color: {selectedColor}
      </h3>
      <div className="flex gap-3">
        {variants.map((variant) => (
          <button
            key={variant.color}
            className={`w-10 h-10 rounded-full border-2 ${
              selectedColor === variant.color
                ? 'border-blue-500 ring-2 ring-blue-300'
                : 'border-gray-300'
            } focus:outline-none transition-all duration-200`}
            style={{ backgroundColor: variant.hex }}
            onClick={() => onColorSelect(variant.color)}
            title={variant.color}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
