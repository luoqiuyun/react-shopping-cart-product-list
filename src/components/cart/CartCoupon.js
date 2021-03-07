import React from "react";
import "./index.css";

const CartCoupon = (props) => {

    return (
        <div className="layout-row justify-content-between align-items-center px-8 mx-12">
            <h5>Select Coupon</h5>
            <select data-testid="cart-coupon"
                    className="coupon-select"
                    value={props.cart.selectedCoupon}
                    disabled={props.cart.subTotal === 0}
                    onChange={(e) => props.discountChanged(e.target.value)}>
                <option value="0">None</option>
                <option value="10">OFF10</option>
                <option value="20">OFF20</option>
            </select>
        </div>
    );
}

export default CartCoupon;