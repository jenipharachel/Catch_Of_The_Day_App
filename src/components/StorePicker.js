import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  handleSubmit = event => {
    // 1. Stop the form from reloading on submit
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/name-of-the-store
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.handleSubmit}>
        <h2>Enter a Store name</h2>
        <input
          type="text"
          ref = {this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()} /* () runs on page load */
          required
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
