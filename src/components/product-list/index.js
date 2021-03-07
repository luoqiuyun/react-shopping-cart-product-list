import React, {Component} from "react";
import Product from './Product';

export default class ProductList extends Component {

    render() {

        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {this.props.products.map((product, i) => 
                    <Product 
                        idx={i}
                        key={'p-' + i}
                        product={product}
                        addToCart={this.props.addToCart}
                        removeFromCart={this.props.removeFromCart} />
                )}
            </div>

        );
    }
}