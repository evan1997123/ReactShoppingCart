import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";

class Cart extends React.Component {
	constructor(props) {
    super(props);
}

  render() {
    return (
        <div className="page-content">
            <h2>Add your products here!</h2>
            {ProductData.products.map(entry => (<Product productName={entry.name} price={entry.cost} limit={entry.stock}/>))}
        </div>
    );
  }

}

export default Cart;
