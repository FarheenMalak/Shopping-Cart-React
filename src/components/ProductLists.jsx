import React from 'react'

const ProductLists = ({ products, addToCart }) => {

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-100">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">🛍️ Products</h2>
      <ul className="space-y-4">
        {products.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-pink-50 p-4 rounded-lg hover:shadow transition-all duration-300"
          >
            <div className="text-lg font-medium text-gray-700">
              {item.name} - <span className="text-purple-700 font-semibold">{item.price} Rs.</span>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300"
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductLists
