import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  /*LifeCycle Methods*/
  componentDidMount() {
    /*listens for changes and persists data in the app*/

    const { params } = this.props.match;
    // reinstating our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    // syncing from database
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    /*used to update the changes in order state to localStorage of browser*/
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    /*stops listening for changes when user leaves the app*/
    base.removeBinding(this.ref);
  }

  /*Custom Methods*/
  addFish = fish => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add new fish to copy of state in fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  updateFish = (key, updatedFish) => {
    // take a copy of the current state
    const fishes = { ...this.state.fishes };
    // update state
    fishes[key] = updatedFish;
    // set it to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // take a copy of state
    const order = { ...this.state.order };
    // add to the order or update the number of fishes in our order
    order[key] = order[key] + 1 || 1;
    // Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="SeaFood Market" /> {/*Component Instance*/}
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
        />
      </div>
    );
  }
}

export default App;
