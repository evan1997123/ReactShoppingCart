import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"; // import child component
import ProductData from "./Data.js";
import Receipt from "./Receipt.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }

  handleAddToCart(productName, price) {
    let copy = [...this.state.cartItems]
    let found = false;
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].name == productName) {
        found = true;
        copy[i] = {name: productName, price: price, count: copy[i].count + 1};
        this.setState({
          cartItems: copy
        });
      }
    }
    if (!found) {
      this.setState({
        cartItems: this.state.cartItems.concat({name: productName, price: price, count: 1})
      });
    }
  }

  handleRemoveToCart(productName, price) {
    let copy = [...this.state.cartItems]
    let found = false;
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].name == productName) {
        found = true;
        const result = copy.filter(item => item.name != productName);
        this.setState({
          cartItems: result
        });
      }
    }
  }



  render() {
    return (
        <div className="page-content">
            <h2>Add your products here!</h2>
            {ProductData.products.map(product => (
              // <Product productName={product.name} price={product.cost} limit={product.stock}/>
              <Product productName={product.name} price={product.cost} onAddToCart={(productName, price) => this.handleAddToCart(productName, price)} onRemoveToCart={(productName, price) => this.handleRemoveToCart(productName, price)}/>
            ))}
            {<Receipt items={this.state.cartItems}/>}
        </div>
    );
  }

}

export default Cart;