import React from 'react'

const Cart = ({ cartItems, removeFromCart, incrementQty, decrementQty }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-100 relative">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">🛒 Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="bg-purple-50 p-4 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="text-gray-700 font-medium text-lg">
                {item.name} - Rs. {item.price} x {item.qty} ={' '}
                <span className="font-bold text-pink-700">
                  Rs. {item.price * item.qty}
                </span>
              </div>

              <div className="mt-3 md:mt-0 flex items-center gap-2">
                <button
                  onClick={() => incrementQty(item.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  +
                </button>
                <button
                  onClick={() => decrementQty(item.id)}
                  className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2 className="mt-6 text-xl font-bold text-pink-700">
        Total = Rs. {total}
      </h2>

      {/* Image Positioned at Bottom-Right */}
      <img
        src="shoppingcart.png!bw700"
        alt="Shopping Cart"
        className="absolute bottom-5 right-4 w-32 h-auto drop-shadow-lg"
      />
    </div>
  );
};

export default Cart;
