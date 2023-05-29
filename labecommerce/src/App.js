import React, { useState } from 'react';
import './App.css'
import Product from './ProductList/ProductList.js';
import Cart from './Cart/Cart.js';
import Filter from './Filter/Filter.js';

const products = [
  { id: 1, name: 'Pacote de viagem para a Lua', price: 10 },
  { id: 2, name: 'Pacote de viagem para Marte', price: 20 },
  { id: 3, name: 'Pacote de viagem para Alfa Centauri', price: 30 },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const filteredProducts = products.filter((product) => {
    const productNameMatch = product.name.toLowerCase().includes(filter.toLowerCase());
    const priceInRange =
      (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
    return productNameMatch && priceInRange;
  });

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="background">
      <h1>Pacotes de viagens espaciais</h1>
      <div className="product-container">
        <h2>Products</h2>
        <Filter
          value={filter}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onChange={(filterValue, minPriceValue, maxPriceValue) => {
            setFilter(filterValue);
            setMinPrice(minPriceValue);
            setMaxPrice(maxPriceValue);
          }}
        />
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        <p>Total: ${cartTotal}</p>
      </div>
    </div>
  );
}

export default App;