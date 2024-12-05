import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}