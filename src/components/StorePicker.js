import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Enter a Store name</h2>
        <input type="text" placeholder="Store Name" required />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
