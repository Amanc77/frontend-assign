// components/SizeSelector.js
import React from 'react';

const SizeSelector = ({ availableSizes, selectedSize, onSizeSelect }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Size: {selectedSize || 'Select a size'}
      </h3>
      <div className="flex flex-wrap gap-3">
        {/* BUG: This component receives all sizes. The filtering based on selected color should happen in the parent component (Product page) */}
        {availableSizes.map((size) => (
          <button
            key={size}
            className={`px-5 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${
              selectedSize === size
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
            } focus:outline-none`}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
