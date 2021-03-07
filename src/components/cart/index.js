import React from "react";

import CartItems from './CartItems';
import CartTotals from './CartTotals';
import "./index.css";

const Cart = (props) => {

    const discountChanged = (e) => {
        props.discountChanged(e.target.value);
    }

    return (
        <div className="card outlined my-16 mr-25 flex-30">
            <section className="layout-row align-items-center justify-content-center px-16">
                <h4>Your Cart</h4>
            </section>
            <div className="divider"/>
            <CartItems cart={props.cart} />
            <div className="layout-row justify-content-between align-items-center px-8 mx-12">
                <h5>Select Coupon</h5>
                <select data-testid="cart-coupon"
                        className="coupon-select"
                        value={props.cart.selectedCoupon}
                        disabled={props.cart.subTotal === 0}
                        onChange={discountChanged}>
                    <option value="0">None</option>
                    <option value="10">OFF10</option>
                    <option value="20">OFF20</option>
                </select>
            </div>
            <CartTotals cart={props.cart} />
        </div>
    );
}

export default Cart;
