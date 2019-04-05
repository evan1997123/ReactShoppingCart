import React from "react";
import "./styles/cart.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 1
    }
  }

  // addToCart() {
  //   if (this.state.count > this.props.limit) {
  //     alert(There are too many ${this.props.productName} in your cart!);
  //   }
  //   else {
  //     this.setState({
  //       count: this.state.count + 1
  //     })
  //     alert(There are ${this.state.count} ${this.props.productName} in your cart!);
  //   }
  // }

  render() {
    return (
      <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{this.props.productName}</div>
          <div className="description">
            ${this.props.price}
          </div>
        </div>
        <div className="ui bottom attached button" onClick={() => {this.props.onAddToCart(this.props.productName, this.props.price)}}>
          <i className="add icon"></i>
          Add to Cart
        </div>
        <div className="ui bottom attached button" onClick={() => {this.props.onRemoveToCart(this.props.productName, this.props.price)}}>
          <i className="remove icon"></i>
          Remove from Cart
        </div>
      </div>
    </div>
    );
  }
}
  
export default Product;