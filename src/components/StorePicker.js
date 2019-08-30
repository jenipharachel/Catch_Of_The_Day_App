import React from "react";
import { getFunName } from "../helpers";
import { get } from "https";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Enter a Store name</h2>
        <input
          type="text"
          placeholder="Store Name"
          defaultValue={getFunName()}
          required
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
