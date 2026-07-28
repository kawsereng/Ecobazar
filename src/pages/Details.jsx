import React from 'react'
import { Container } from '../Components/Layout/Container'
 import { useState } from "react"; 
 
  
  
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ];
  
export const Details = () => {
 const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
    <Container>
     
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />

            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-300 ${
                    mainImage === img
                      ? "opacity-100 ring-2 ring-indigo-500"
                      : "opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">
              Premium Wireless Headphones
            </h2>

            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">$349.99</span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path d="M12 2.5l2.9 6.2 6.8.6-5.2 4.6 1.6 6.7L12 17.7 5.9 20.6l1.6-6.7-5.2-4.6 6.8-.6L12 2.5z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                4.5 (120 reviews)
              </span>
            </div>

            <p className="text-gray-700 mb-6">
              Experience premium sound quality and industry-leading noise
              cancellation with these wireless headphones. Perfect for music
              lovers and frequent travelers.
            </p>

            {/* Colors */}
            {/* <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-black border"></button>
                <button className="w-8 h-8 rounded-full bg-gray-300 border"></button>
                <button className="w-8 h-8 rounded-full bg-blue-500 border"></button>
              </div>
            </div> */}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-16 text-center border rounded-md py-1"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Add to Cart
              </button>

              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
                Wishlist
              </button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
 


    </Container>
    
    </>
  )
}
