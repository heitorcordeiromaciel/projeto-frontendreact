import React from 'react';
import './ProductList.css'

function ProductList({ product, addToCart }) {

  const { id, name, price } = product;

  return (
    <div className="product">
      <p>{name} - ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductList;