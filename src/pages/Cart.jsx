import React, { useState } from 'react';

export default function ShoppingCart() {
  // Cart items state with initial data matching the design
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Green Capsicum',
      price: 14.00,
      quantity: 1,
      image: 'https://res.cloudinary.com/m3raib7v/image/upload/v1783705560/products/wxwswtz1hwdnk0dhzndy.png'
    },
    {
      id: 2,
      name: 'Red Capsicum',
      price: 14.00,
      quantity: 1,
      image: 'https://res.cloudinary.com/m3raib7v/image/upload/v1783717086/products/gjtttp37chfa3jvuujto.png',
    },
  ]);

  const [coupon, setCoupon] = useState('');

  // Handle quantity increment
  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle quantity decrement
  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle item removal
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <h1 className="font-pop font-semibold text-[32px] text-[#1A1A1A] mb-12">
          My Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Table & Coupon Section */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Cart Table Box */}
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  
                  {/* Table Header */}
                  <thead>
                    <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-[#808080] text-[14px] font-pop bg-gray-50/50">
                      <th className="py-4 px-6 font-medium">Product</th>
                      <th className="py-4 px-4 font-medium">Price</th>
                      <th className="py-4 px-4 font-medium">Quantity</th>
                      <th className="py-4 px-4 font-medium">Subtotal</th>
                      <th className="py-4 px-4 font-medium text-right"></th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => {
                        const itemSubtotal = item.price * item.quantity;
                        return (
                          <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                            {/* Product Info */}
                            <td className="py-4 px-6 flex items-center space-x-4">
                              <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded border border-gray-100 shrink-0 ">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-12 h-12 object-contain ]"
                                />
                              </div>
                              <span className="font-normal text-[#1A1A1A] text-[16px] font-pop ">{item.name}</span>
                            </td>

                            {/* Price */}
                            <td className="py-4 px-4  text-[16px] text-[#1A1A1A] font-pop font-normal">
                              ${item.price.toFixed(2)}
                            </td>

                            {/* Quantity Controls */}
                            <td className="py-8 px-8">
                              <div className="inline-flex items-center border border-gray-200 rounded-full px-2 py-1 bg-white">
                                <button 
                                  onClick={() => handleDecrease(item.id)}
                                  className="w-8 h-8 flex items-center justify-center text-[#1A1A1A] bg-gray-100 rounded-full transition-colors cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="w-8 text-center text-sm font-medium text-gray-800">
                                  {item.quantity}
                                </span>
                                <button 
                                  onClick={() => handleIncrease(item.id)}
                                  className="w-8 h-8 flex items-center justify-center text-gray-500 bg-gray-100 rounded-full transition-colors cursor-pointer"
                                >
                                  +
                                </button>
                              </div>
                            </td>

                            {/* Subtotal */}
                            <td className="py-4 px-4 font-medium text-[16px] font-pop text-[#1A1A1A]">
                              ${itemSubtotal.toFixed(2)}
                            </td>

                            {/* Remove Button */}
                            <td className="py-4 px-4 text-right">
                              <button 
                                onClick={() => handleRemove(item.id)}
                                className="w-7 h-7 inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors cursor-pointer"
                              >
                                &times;
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-8 text-center text-gray-500">
                          Your cart is empty.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table Footer Actions */}
              <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
                <button className="w-full sm:w-auto px-6 py-3 border border-gray-200 bg-[#F2F2F2] rounded-full text-sm font-semibold font-pop text-[#4D4D4D] hover:bg-gray-50 transition-colors cursor-pointer">
                  Return to shop
                </button>
                <button className="w-full sm:w-auto px-6 py-3 border border-gray-200 bg-[#F2F2F2]  rounded-full text-sm font-semibold font-pop text-[#4D4D4D] hover:bg-gray-50 transition-colors cursor-pointer">
                  Update Cart
                </button>
              </div>
            </div>

            {/* Coupon Code Section */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-lg font-medium font-pop text-[20px] text-[#1A1A1A] whitespace-nowrap">
                Coupon Code
              </h3>
              <div className="flex w-full sm:max-w-md border border-gray-200 rounded-full overflow-hidden p-1 bg-white">
                <input 
                  type="text" 
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter code" 
                  className="w-full px-4 py-2 text-sm focus:outline-none placeholder:text-gray-400 bg-transparent"
                />
                <button className="bg-[#2C2C2C] hover:bg-black text-white font-semibold font-pop text-[16px] px-6 py-2.5 rounded-full transition-colors cursor-pointer shrink-0">
                  Apply Coupon
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: Cart Total Summary Box */}
          <div className="lg:col-span-4">
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-[20px] font-medium font-pop text-[#1A1A1A] mb-6">
                Cart Total
              </h3>

              <div className="space-y-4 pb-6 border-b border-gray-200 text-sm">
                <div className="flex justify-between text-[16px] text-[#4D4D4D] font-pop font-normal">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-[#1A1A1A]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[16px] font-pop font-normal">
                  <span>Shipping:</span>
                  <span className="font-semibold text-[#4D4D4D]">Free</span>
                </div>
              </div>

              <div className="flex justify-between text-[16px] text-[#1A1A1A] font-pop font-semibold py-4">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {/* Proceed to Checkout Button */}
              <button className="w-full mt-2 bg-[#00B207] hover:bg-[#009b06] text-white font-medium py-3.5 px-4 rounded-full transition-colors duration-200 text-center shadow-sm cursor-pointer">
                Proceed to checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
