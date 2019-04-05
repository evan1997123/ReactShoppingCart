import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (<p>
        <div className="receipt-item" key={item.name}>
          <div className="receipt-text">
                {item.name} x {item.count}
          </div>
            <div className="receipt-text">
                ${(item.price * item.count).toFixed(2)}
          </div>
        </div>
    </p>);
  }

  sumTotal() {
    let total = 0;
    for (var i = 0; i < this.props.items.length; i++) {
      total += this.props.items[i].price.toFixed(2) * this.props.items[i].count.toFixed(2);
    }
    return total;
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.sumTotal().toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;