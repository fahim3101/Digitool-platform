import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import productsData from './data.json';

const App = () => {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('Products');

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    
    if (!isExist) {
      setCart([...cart, product]);
      toast.success('Successfully added to cart!', {
        position: "bottom-right",
        autoClose: 2000,
      });
    } else {
      toast.info('Item already in cart', {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    toast.error('Product removed from cart!', {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      setCart([]); 
      toast.success('Successfully proceeded to checkout!', {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.warning('Your cart is empty!', {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar with Cart Count */}
      <Navbar cartCount={cart.length} />

      {/* Banner Section */}
      <Banner />

      {/* Stats Section */}
      <Stats />

      {/* Main Section: */}
      <MainSection 
        products={productsData}
        cart={cart}
        activeTab={activeTab}
        toggleTab={toggleTab}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
      

      {/* Other Sections */}
      

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      {/* Notification Container */}
      <ToastContainer pauseOnFocusLoss={false} theme="colored" />
    </div>
  );
};

export default App;