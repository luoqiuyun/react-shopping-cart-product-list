import React from "react";
import "./index.css";

const CartItems = (props) => {

    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Item</th>
                <th className="numeric">Quantity</th>
                <th className="numeric">Price</th>
            </tr>
            </thead>
            <tbody>
            {
                props.cart.items.map((cartItem, idx) => {
                    return (
                        <tr data-testid={'cart-item-' + idx}
                            key={idx + 1}
                            className="slide-up-fade-in">
                            <td>{idx + 1}.</td>
                            <td className="name" data-testid="cart-item-name">{cartItem.item}</td>
                            <td className="numeric quantity" data-testid="cart-item-quantity">
                                {cartItem.quantity}
                            </td>
                            <td className="numeric quantity" data-testid="cart-item-price">
                                {cartItem.price}
                            </td>
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
    );
}

export default CartItems;