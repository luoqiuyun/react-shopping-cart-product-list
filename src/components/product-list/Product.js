import React, {Component} from "react";
import "./index.css";

export default class Product extends Component {
  constructor() {
    super();

    this.state = {
      addToCartDisplay: {display:'normal'},
      removeButtonDisplay: {display:'none'}
    }
  }

  addToCart = () => {
    this.setState({
      addToCartDisplay: {display:'none'},
      removeButtonDisplay: {display:'inline'},
    });
    this.props.addToCart(this.props.idx);
  };

  removeFromCart = () => {
    this.setState({
      addToCartDisplay: {display:'inline'},
      removeButtonDisplay: {display:'none'}
    });
    this.props.removeFromCart(this.props.idx);
  };

  render() {
    return (
      <section className="w-30"
               data-testid={'product-item-' + this.props.idx}
               key={this.props.product.id}>
        <div className="product-item card ma-16">
          <img alt="Your Cart" src={this.props.product.image}
               className="d-inline-block align-top product-image"/>
          <div className="card-text pa-4">
            <h5 className="ma-0 text-center">{this.props.product.name}</h5>
            <p className="ma-0 mt-8 text-center">${this.props.product.price}</p>
          </div>
          <div className="card-actions justify-content-center pa-4">
            <button 
              className="x-small outlined"
              data-testid="btn-item-add"
              onClick={this.addToCart}
              style={this.state.addToCartDisplay}>Add To Cart
            </button>

            <button 
              className="x-small danger"
              data-testid="btn-item-remove"
              style={this.state.removeButtonDisplay}
              onClick={this.removeFromCart}>Remove
            </button>
          </div>
        </div>
      </section>
    );
  }
}