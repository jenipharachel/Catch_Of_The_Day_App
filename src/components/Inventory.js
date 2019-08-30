import React from "react";
import AddFish from "./AddFish";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFish addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Inventory;
