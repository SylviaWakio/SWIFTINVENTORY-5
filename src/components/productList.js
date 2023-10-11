import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from your Flask API
    axios
      .get('https://swiftinventory2023-f984d0fc6c43.herokuapp.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data once when the component mounts

  useEffect(() => {
    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [searchQuery, products]);

  return (
    <div>
      <div className="bg-green-500 p-4 mb-4 text-center">
        <h2 className="text-white underline text-3xl mb-2">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-3/5 px-3 py-2 pr-8 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute top-2 right-3 text-gray-400">
            <i className="fas fa-search text-lg"></i> {/* Assuming you are using Font Awesome for the search icon */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md transform transition hover:scale-110 hover:bg-green-100 m-3"
          >
            <h3 className="text-green-600 font-semibold text-sm md:text-lg">{product.name}</h3>
            <p className="text-gray-700 text-xs md:text-sm">Price: ${product.price}</p>
            <p className="text-gray-700 text-xs md:text-sm">Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
