import React, { useState } from 'react';
import { 
  FiFilter, FiChevronDown, FiHeart, FiEye, FiShoppingBag, 
   FiStar, FiChevronLeft, FiChevronRight 
} from 'react-icons/fi';
import PopularTags from '../Components/PopularTags';
import { FreshVegetables } from '../Components/ProductApi/FreshVegetables';
import { Container } from '../Components/Layout/Container';

// Dummy data for products matching the layout design
const PRODUCTS = [
  { id: 1, name: 'Big Potatoes', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 2, name: 'Chanise Cabbage', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80', badge: null, active: true },
  { id: 3, name: 'Ladies Finger', price: 14.99, oldPrice: 20.99, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=300&auto=format&fit=crop&q=80', badge: 'Out of Stock' },
  { id: 4, name: 'Eggplant', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 5, name: 'Fresh Cauliflower', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1568584711207-3366d215392d?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 6, name: 'Green Apple', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 7, name: 'Green Capsicum', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 8, name: 'Green Chili', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1588252303783-7901da42e96d?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 9, name: 'Green Cucumber', price: 14.99, oldPrice: 20.99, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1449300079323-02e20989d8a2?w=300&auto=format&fit=crop&q=80', badge: 'Sale 50%' },
  { id: 10, name: 'Green Lettuce', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 11, name: 'Ladies Finger', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 12, name: 'Green Capsicum', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&auto=format&fit=crop&q=80', badge: null, active: true },
  { id: 13, name: 'Red Chili', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1588252303783-7901da42e96d?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 14, name: 'Red Tomato', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80', badge: null },
  { id: 15, name: 'Fresh Mango', price: 14.99, oldPrice: null, rating: 4, reviews: 4, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&auto=format&fit=crop&q=80', badge: null },
];

const SIDEBAR_CATEGORIES = [
  { name: 'Fresh Fruit', count: 134, active: true },
  { name: 'Vegetables', count: 150, active: false },
  { name: 'Cooking', count: 54, active: false },
  { name: 'Snacks', count: 47, active: false },
  { name: 'Beverages', count: 43, active: false },
  { name: 'Beauty & Health', count: 38, active: false },
  { name: 'Bread & Bakery', count: 15, active: false },
];





const SALE_PRODUCTS = [
  { name: 'Red Capsicum', price: 32.00, oldPrice: 20.99, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=100&auto=format&fit=crop&q=80' },
  { name: 'Chanise Cabbage', price: 24.00, oldPrice: 20.99, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&auto=format&fit=crop&q=80' },
  { name: 'Green Capsicum', price: 32.00, oldPrice: 20.99, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=100&auto=format&fit=crop&q=80' },
];

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState(500);

const [selectedCategory, setSelectedCategory] = useState(
  SIDEBAR_CATEGORIES.find((cat) => cat.active)?.name || ""
);
  return (
    <>
    <Container>
      <div className="min-h-screen bg-white font-sans text-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* ================= SIDEBAR ================= */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
          {/* Filter Button Header */}
          <div className="flex items-center justify-between bg-emerald-500 text-white px-4 py-3 rounded-lg font-medium cursor-pointer">
            <span className="flex items-center gap-2">
              <FiFilter /> Filter
            </span>
            <FiChevronDown />
          </div>

          {/* All Categories */}
          <div>
            <div className="flex items-center justify-between font-bold text-gray-900 mb-4 text-lg">
              <h3>All Categories</h3>
              <FiChevronDown className="text-sm text-gray-500" />
            </div>

            <ul className="space-y-3">
              {SIDEBAR_CATEGORIES.map((cat, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between text-sm cursor-pointer"
                >
                  <label
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.name}
                      onChange={() => setSelectedCategory(cat.name)}
                      className="accent-green-600 w-4 h-4"
                    />

                    <span
                      className={
                        selectedCategory === cat.name
                          ? "text-emerald-600 font-medium"
                          : "text-gray-600"
                      }
                    >
                      {cat.name}
                    </span>
                  </label>

                  <span className="text-gray-400">({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Price Range */}
          <div>
            <div className="flex items-center justify-between font-bold text-gray-900 mb-4 text-lg">
              <h3>Price</h3>
              <FiChevronDown className="text-sm text-gray-500" />
            </div>
            <input
              type="range"
              min="0"
              max="1500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full accent-emerald-500 cursor-pointer bg-gray-200 h-1.5 rounded-lg"
            />
            <div className="text-sm text-gray-600 mt-2">
              Price:{" "}
              <span className="font-semibold text-gray-900">
                50 – {priceRange}
              </span>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Rating Filter */}
          <div>
            <div className="flex items-center justify-between font-bold text-gray-900 mb-4 text-lg">
              <h3>Rating</h3>
              <FiChevronDown className="text-sm text-gray-500" />
            </div>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    defaultChecked={stars === 4}
                    className="accent-green-600 w-4 h-4 rounded border-gray-300"
                  />
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < stars ? "fill-amber-400" : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                  <span
                    className={
                      stars === 4
                        ? "text-gray-900 font-medium"
                        : "text-gray-500"
                    }
                  >
                    {stars}.0 & up
                  </span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Popular Tags */}
          <PopularTags />

          {/* Promotional Banner */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 p-6 border border-orange-100"></div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1">
          {/* Top Bar / Sorting */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  p-4 rounded-lg mb-6 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <select className="bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500">
                <option>Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
            <div className="text-sm text-gray-600 font-medium">
              <span className="text-gray-900 font-bold">52</span> Results Found
            </div>
          </div>

          {/* Product Grid */}
          <FreshVegetables/>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              aria-label="Previous Page"
              className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
            >
              <FiChevronLeft size={16} />
            </button>
            <button className="w-9 h-9 bg-emerald-500 text-white rounded-full font-medium text-sm flex items-center justify-center shadow-sm">
              1
            </button>
            <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
              2
            </button>
            <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
              3
            </button>
            <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
              4
            </button>
            <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
              5
            </button>
            <span className="text-gray-400 px-1">...</span>
            <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
              21
            </button>
            <button
              aria-label="Next Page"
              className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
    </Container>
    </>
    
  );
}
