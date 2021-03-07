import React from "react";

import CartItems from './CartItems';
import CartCoupon from './CartCoupon';
import CartTotals from './CartTotals';
import "./index.css";

const Cart = (props) => {

  return (
    <div className="card outlined my-16 mr-25 flex-30">
      <section className="layout-row align-items-center justify-content-center px-16">
        <h4>Your Cart</h4>
      </section>
      <div className="divider"/>
      <CartItems cart={props.cart} />
      <CartCoupon {...props} />
      <CartTotals cart={props.cart} />
    </div>
  );
}

export default Cart;
