import React from "react";

const Header = props => (
  /*stateless functional component*/
  <header className="top">
    <h1>
      Fresh
      <span className="ofThe">
        <span className="of">off</span>
        <span className="the">the</span>
      </span>
      Boat
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
