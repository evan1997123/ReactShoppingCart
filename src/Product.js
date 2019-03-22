import React from "react";
import "./styles/cart.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
      
    }
  }

  addToCart(){
    //this.setState((prevState) => {count: prevState.count+1});
    if(this.state.count>this.props.limit)
    {
      alert(`There are too many ${this.props.productName} in your cart.`);
    }
    else
    {
      this.setState({
      count: this.state.count+1
      });

      alert(`There are ${this.state.count} ${this.props.productName} in your cart.`);
    
    }
  }

  render() {
    return (
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <div class="header">{this.props.productName}</div>
                <div class="description">
                  {this.props.price}
                </div>
            </div>
              <div class="ui bottom attached button" onClick = {() => this.addToCart()}>
                <i class="add icon" onClick = {() => this.addToCart()}></i>
                Add to cart
              </div>
          </div>
        </div>
    );
  }

}

export default Product;
