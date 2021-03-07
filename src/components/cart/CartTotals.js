import React from "react";
import "./index.css";

const CartTotals = (props) => {

  return (
    <ul className="bordered inset ma-0 px-8 mt-30">
      <li className="layout-row justify-content-between py-12 caption font-weight-light">
        <span>Subtotal</span>
        <span data-testid="cart-subtotal">${props.cart.subTotal}</span>
      </li>
      <li className="layout-row justify-content-between py-12 caption font-weight-light">
        <span>Discount (-)</span>
        <span className="discount" data-testid="cart-discount">${props.cart.discount}</span>
      </li>
      <li className="layout-row justify-content-between py-12 font-weight-bold">
        <span>Total</span>
        <span data-testid="cart-total">${props.cart.totalPrice}</span>
      </li>
    </ul>
  );
}

export default CartTotals;