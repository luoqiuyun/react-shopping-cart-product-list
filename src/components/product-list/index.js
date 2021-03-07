import React from "react";
import Product from './Product';

const ProductList = (props) => {
  return (
    <div className="layout-row wrap justify-content-center flex-70 app-product-list">
      {props.products.map((product, i) => 
        <Product 
          idx={i}
          key={'p-' + i}
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart} />
      )}
    </div>
  );
}

export default ProductList;