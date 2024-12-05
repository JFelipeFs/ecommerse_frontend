import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Modern Laptop",
    price: 999.99,
    description: "Powerful laptop for all your needs",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Premium sound quality",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics"
  },
  // Add more products as needed
];

export function Catalog() {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-indigo-600" />
                    <span className="ml-2">Electronics</span>
                  </label>
                  {/* Add more categories */}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="1000"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}