import React from 'react';
import designTool from '../assets/design-tool.png';
import operation from '../assets/operation.png';
import portfolio from '../assets/portfolio.png';
import socialMedia from '../assets/social-media.png';
import writing from '../assets/writing_2327400 1.png';

const MainSection = ({ products, cart, activeTab, toggleTab, handleAddToCart, handleRemoveFromCart, handleCheckout }) => {
  
  const getImage = (imageName) => {
    const images = {
      "design-tool.png": designTool,
      "operation.png": operation,
      "portfolio.png": portfolio,
      "social-media.png": socialMedia,
      "writing_2327400 1.png": writing
    };
    return images[imageName] || designTool;
  };

  return (
    <div className="py-16 px-6 lg:px-20 bg-white">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-full flex border border-gray-200">
          <button 
            onClick={() => toggleTab('Products')}
            className={`px-10 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'Products' ? 'bg-[#8b5cf6] text-white shadow-lg' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Products
          </button>
          <button 
            onClick={() => toggleTab('Cart')}
            className={`px-10 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'Cart' ? 'bg-[#8b5cf6] text-white shadow-lg' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {activeTab === 'Products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products && products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-b-4 hover:border-b-[#8b5cf6]">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                {/* Fixed Image Tag */}
                <img 
                  src={getImage(product.image)} 
                  alt={product.name} 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-3xl font-black text-gray-900">${product.price}</span>
                <span className="text-gray-400 text-sm font-medium">/Lifetime</span>
              </div>
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#8b5cf6] text-white py-4 rounded-2xl font-bold hover:bg-[#7c3aed] transition-transform active:scale-95 shadow-md"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-inner min-h-[400px]">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Shopping Cart</h3>
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Your cart is empty.</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-6 bg-white border border-gray-100 rounded-2xl mb-4 shadow-sm">
                  <div className="flex items-center gap-5">
                    <img src={getImage(item.image)} alt="" className="w-12 h-12" />
                    <div>
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-sm font-medium text-purple-600">${item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemoveFromCart(item.id)} 
                    className="text-red-400 font-bold hover:text-red-600 px-4 py-2 hover:bg-red-50 rounded-lg transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-200 flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-gray-500">Total Amount:</span>
                <span className="text-4xl font-black text-gray-900">
                  ${cart.reduce((total, item) => total + item.price, 0)}
                </span>
              </div>
              <button 
                onClick={handleCheckout} 
                className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:bg-gray-800 transition shadow-2xl"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MainSection;