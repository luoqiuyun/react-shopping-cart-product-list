import React, { Component } from 'react';

import { products } from './services/products'
import ProductList from "./components/product-list";
import Cart from "./components/cart";
import 'h8k-components';

import './App.css';

const title = "HackerShop";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products,
      cart: {
        items: [],
        subTotal: 0,
        totalPrice: 0,
        discount: 0,
        selectedCoupon: '0'
      }
    }
  }

  discountChanged = (coupon) => {
    let cart = {...this.state.cart};
    cart.selectedCoupon = coupon;
    cart.discount = (cart.selectedCoupon / 100) * cart.subTotal;
    cart.totalPrice = cart.subTotal - cart.discount;
    this.setState({ cart });
  };

  addToCart = (index) => {
    const products = this.state.products;
    products[index].cartQuantity = 1;
    let cart = {...this.state.cart};
    cart.items.push({
      id: products[index].id,
      price: products[index].price,
      item: products[index].heading,
      quantity: 1
    });
    cart.subTotal += products[index].price;
    cart.discount = (cart.selectedCoupon / 100) * cart.subTotal;
    cart.totalPrice = cart.subTotal - cart.discount;
    this.setState({
      products,
      cart
    })
  };

  removeFromCart = (index) => {
    const products = this.state.products;
    products[index].cartQuantity = 0;
    let cart = {...this.state.cart};
    let cartIndex = this.state.cart.items.findIndex(item => item.id === products[index].id);
    cart.items.splice(cartIndex, 1);
    cart.subTotal -= products[index].price;
    cart.discount = (cart.selectedCoupon / 100) * cart.subTotal;
    cart.totalPrice = cart.subTotal - cart.discount;
    if(cart.subTotal === 0) {
      cart.totalPrice = 0;
      cart.discount = 0;
      cart.selectedCoupon = '0';
    }
    this.setState({
      cart,
      products
    })
  };

  render() {
    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row shop-component">
          <ProductList 
            products={this.state.products}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart} />
          <Cart
            cart={this.state.cart}
            discountChanged={this.discountChanged} />
        </div>
      </div>
    );
  }
}

export default App;