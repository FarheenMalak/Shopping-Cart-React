import React, { useState } from 'react'
import ProductLists from './components/ProductLists';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mobile", price: 900 },
    { id: 3, name: "Tablet", price: 800 },
  ];

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.find((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item already in cart.");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const incrementQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decrementQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-pink-100 to-purple-200 font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          🛒 Shopping Cart ~ {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductLists products={products} addToCart={addToCart} />
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
          />
        </div>
      </div>
  
    </div>
  );
  
  
};

export default App;
